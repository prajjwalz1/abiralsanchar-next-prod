"use client";

import { divider } from "@/assets/colors";
import { padding_x, rGap } from "@/assets/css/styles";
import {
  HeroArticleSection,
  SimilarNewsSection,
} from "@/dynamic-imports/components";
import {
  useAppDispatch,
  useAppSelector,
  RootState,
} from "@/helpers/hooks/useStoreHooks";
import {
  GetSingleArticleThunk,
  GetAllArticlesThunk,
  GetSingleCategoryNewsThunk,
} from "@/helpers/redux-app/news-portal/_thunks";
import { destructHeaderData } from "@/utils/methods/reduxMethods";
import { useEffect } from "react";

// export type ArticleSectionSchema = {
//   id: number;
// };

export default function ArticleSection(props: any) {
  // Props
  const {
    id,
    isArticle,
    isTrending,
    isLatest,
    isFeatured,
    isCategories,
    news_slug,
  } = props;

  // Redux
  const dispatch = useAppDispatch();
  const {
    header_data,
    articles_data,
    single_article_data,
    single_category_news_data,
  } = useAppSelector((state: RootState) => state.NewsPortal);

  // Destructured variables
  const { featured_articles, latest_articles, trending_articles } =
    destructHeaderData(header_data.successResponse);

  // Action to get the required data from api
  const d = (res: any) => res?.successResponse?.data ?? [];

  // Actual variables used
  const chosen_article = isArticle
    ? d(single_article_data)
    : isCategories
    ? d(single_category_news_data)[0]
    : [];
  const all_articles = isArticle
    ? d(articles_data)
    : isFeatured
    ? d(featured_articles)
    : isLatest
    ? d(latest_articles)
      ? isTrending
      : d(trending_articles)
    : isCategories
    ? d(single_category_news_data).slice(1)
    : [];

  // Show hero article when
  const showArticle =
    isArticle || isTrending || isLatest || isFeatured || isCategories;

  useEffect(() => {
    dispatch(GetSingleArticleThunk(id));

    if (isArticle) {
      dispatch(GetAllArticlesThunk());
      return;
    }
  }, [dispatch]);

  useEffect(() => {
    if (isCategories) {
      dispatch(GetSingleCategoryNewsThunk(news_slug));
      return;
    }
  }, [news_slug, dispatch]);

  return (
    <div
      className={`${padding_x} ${divider} flex flex-col ${rGap} divide-y pb-10 md:pb:0`}
    >
      {showArticle && (
        <>
          <HeroArticleSection {...chosen_article} isFlag />
          <SimilarNewsSection articles={all_articles} />
        </>
      )}
    </div>
  );
}
