"use client";

import { divider } from "@/assets/colors";
import { padding_x, rGap } from "@/assets/css/styles";
import {
  // DidYouLeaveSection,
  HeroArticleSection,
  SimilarNewsSection,
  // SimilarNewsSection,
} from "@/dynamic-imports/components";
import {
  useAppDispatch,
  useAppSelector,
  RootState,
} from "@/helpers/hooks/useStoreHooks";
import {
  GetArticleDataByIdThunk,
  GetArticlesNewsDataThunk,
} from "@/helpers/redux-app/news-portal/_thunks";
import { useEffect } from "react";

// export type ArticleSectionSchema = {
//   id: number;
// };

export default function ArticleSection(props: any) {
  // Props
  const { id, isArticle, isTrending, isLatest, isFeatured } = props;

  // Redux
  const dispatch = useAppDispatch();
  const { header, article_data_by_id, articles_news_data } = useAppSelector(
    (state: RootState) => state.NewsPortal
  );

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
    ? featured_data
    : isLatest
    ? latest_data
      ? isTrending
      : trending_data
    : [];

  // Show hero article when
  const showArticle = isArticle || isTrending || isLatest || isFeatured;

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
