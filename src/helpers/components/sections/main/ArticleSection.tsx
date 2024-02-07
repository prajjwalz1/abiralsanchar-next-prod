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
  GetAllCategoriesThunk,
} from "@/helpers/redux-app/news-portal/_thunks";
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
    category_title,
  } = props;

  // Redux
  const dispatch = useAppDispatch();
  const { header, single_article_data, articles_data, categories_data } =
    useAppSelector((state: RootState) => state.NewsPortal);

  // Destructured variables
  const { featured, latest, trending } = header;
  const { featured_data } = featured;
  const { latest_data } = latest;
  const { trending_data } = trending;

  // Action to get the required data from api
  const d = (res: any) => res?.successResponse?.data;

  // Actual variables used
  const chosen_article = isArticle
    ? d(single_article_data)
    : isCategories
    ? d(categories_data)[0]
    : [];
  const all_articles = isArticle
    ? d(articles_data)
    : isFeatured
    ? d(featured_data)
    : isLatest
    ? d(latest_data)
      ? isTrending
      : d(trending_data)
    : isCategories
    ? d(categories_data).slice(1)
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
    if (isArticle) {
      dispatch(GetSingleArticleThunk(id));
      return;
    }
  }, [dispatch]);

  useEffect(() => {
    if (isCategories) {
      dispatch(GetAllCategoriesThunk(category_title));
      return;
    }
  }, [category_title, dispatch]);

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

      {/* <DidYouLeaveSection articles={did_you_leave_articles} /> */}
    </div>
  );
}
