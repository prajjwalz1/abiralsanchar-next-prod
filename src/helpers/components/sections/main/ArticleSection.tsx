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
  GetArticleDataByIdThunk,
  GetArticlesNewsDataThunk,
  GetCategoriesNewsDataThunk,
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
  const {
    header,
    article_data_by_id,
    articles_news_data,
    categories_news_data,
  } = useAppSelector((state: RootState) => state.NewsPortal);

  // Destructured variables
  const { featured, latest, trending } = header;
  const { featured_data } = featured;
  const { latest_data } = latest;
  const { trending_data } = trending;

  // Action to get the required data from api
  const d = (res: any) => res?.successResponse?.data;

  // Actual variables used
  const chosen_article = isArticle ? d(article_data_by_id) : [];
  const all_articles = isArticle
    ? d(articles_news_data)
    : isFeatured
    ? d(featured_data)
    : isLatest
    ? d(latest_data)
      ? isTrending
      : d(trending_data)
    : isCategories
    ? d(categories_news_data)
    : [];

  // Show hero article when
  const showArticle =
    isArticle || isTrending || isLatest || isFeatured || isCategories;

  useEffect(() => {
    if (isArticle) {
      dispatch(GetArticleDataByIdThunk(id));
      dispatch(GetArticlesNewsDataThunk());
      return;
    }
    if (isArticle) {
      dispatch(GetArticleDataByIdThunk(id));
      return;
    }
    if (isCategories) {
      dispatch(GetCategoriesNewsDataThunk(category_title));
      return;
    }
  }, [dispatch]);

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
