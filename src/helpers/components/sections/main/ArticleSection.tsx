"use client";

import { divider } from "@/assets/colors";
import { padding_x, rGap } from "@/assets/css/styles";
import {
  DisplayErrorBox,
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
  const { id, isTrending, isLatest, isFeatured, isCategories, news_slug } =
    props;

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
  const single_article = d(single_article_data);

  const pickRemainingArticles = (d: any) =>
    d?.filter((item: any) => item?.id !== single_article?.id);

  const filtered_articles = pickRemainingArticles(d(articles_data));
  const filtered_trending = pickRemainingArticles(d(trending_articles));
  const filtered_latest = pickRemainingArticles(d(latest_articles));
  const filtered_featured = pickRemainingArticles(d(featured_articles));
  const single_category = d(single_category_news_data)[0];
  const filtered_categories = d(single_category_news_data)?.filter(
    (item: any) => item?.id !== single_category?.id
  );

  // Actual variables used
  const chosen_article = isCategories ? single_category : single_article ?? [];
  const all_articles = isFeatured
    ? filtered_featured
    : isLatest
    ? filtered_latest
      ? isTrending
      : filtered_trending
    : isCategories
    ? filtered_categories
    : filtered_articles ?? [];

  // Show hero article when
  const showArticle = isTrending || isLatest || isFeatured || isCategories;

  useEffect(() => {
    dispatch(GetSingleArticleThunk(id));

    if (!showArticle) {
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
      {!chosen_article?.length ? (
        <DisplayErrorBox description="यस्तो कुनै लेख फेला परेन!" />
      ) : (
        <>
          <HeroArticleSection {...chosen_article} isFlag />
        </>
      )}

      {!all_articles?.length ? (
        <DisplayErrorBox description="कुनै समान लेख फेला परेन!" />
      ) : (
        <>
          <SimilarNewsSection articles={all_articles} />
        </>
      )}
    </div>
  );
}
