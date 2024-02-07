import { createSlice } from "@reduxjs/toolkit";
import {
  GetArticleDataByIdThunk,
  GetArticlesNewsDataThunk,
  GetCategoriesNewsDataThunk,
  GetHomepageDataThunk,
} from "./_thunks";
import * as C from "@/utils/constants/redux-constants";
import * as S from "@/utils/schemas/ReduxSchema";

type ISchema = {
  header: S.HeaderIDSchema;

  // Homepage data
  homepage_data: S.HomepageIDSchema;

  // Categories news get (whole)
  categories_news_data: S.CategoriesNewsDataSchema;

  // Articles' data
  articles_news_data: S.ArticlesNewsDataSchema;

  // Article news get (single)
  article_data_by_id: S.ArticleDataByIdSchema;
};

const initialState: ISchema = {
  header: C.HEADER_INITIAL_DATA,
  homepage_data: C.HOMEPAGE_INITIAL_DATA,
  categories_news_data: C.CATEGORIES_NEWS_INITIAL_DATA,
  articles_news_data: C.ARTICLES_NEWS_INITIAL_DATA,
  article_data_by_id: C.ARTICLE_INITIAL_DATA,
};

export const NewsPortalSlice = createSlice({
  name: "news-portal/NewsPortalSlice",
  initialState,
  reducers: {
    // Current news
    clearIsCurrentNews: (state) => {
      state.header.featured.is_featured = false;
      state.header.trending.is_trending = false;
      state.header.latest.is_latest = false;
    },
    setIsCurrentNews: (state, action) => {
      const value: S.CurrentNewsTypeSchema = action.payload;
      if (C.CURRENT_NEWS_TYPE.includes(value)) {
        state.header = {
          ...state.header,
          [value]: {
            ...state.header[value],
            [`is_${value}`]: true,
          },
        };
      }
    },
  },
  extraReducers: (builder) => {
    builder
      ////////////////////////////////////////
      ////////////////////////////////////////
      // Homepage data
      ////////////////////////////////////////
      ////////////////////////////////////////
      .addCase(GetHomepageDataThunk.pending, (state) => {
        // Normal states
        state.homepage_data.isPending = true;
        state.homepage_data.isFulfilled = false;
        state.homepage_data.isRejected = false;
      })
      .addCase(GetHomepageDataThunk.fulfilled, (state, action) => {
        // Variables
        const payload = action.payload;

        // Normal states
        state.homepage_data.isPending = false;
        state.homepage_data.isFulfilled = true;
        state.homepage_data.isRejected = false;

        // Header
        state.header.featured.featured_data = payload.data[1].featured_articles;
        state.header.latest.latest_data = payload.data[3].latest_articles;
        state.header.trending.trending_data = payload.data[2].trending_articles;

        // Success data
        state.homepage_data.successResponse = action.payload;
      })
      .addCase(GetHomepageDataThunk.rejected, (state, action) => {
        // Normal states
        state.homepage_data.isPending = false;
        state.homepage_data.isFulfilled = false;
        state.homepage_data.isRejected = true;

        // Rejected data
        state.homepage_data.errorResponse = action.payload;
      })
      ////////////////////////////////////////
      ////////////////////////////////////////
      // Categories news get (whole)
      ////////////////////////////////////////
      ////////////////////////////////////////
      .addCase(GetCategoriesNewsDataThunk.pending, (state) => {
        // Normal states
        state.categories_news_data.isPending = true;
        state.categories_news_data.isFulfilled = false;
        state.categories_news_data.isRejected = false;
      })
      .addCase(GetCategoriesNewsDataThunk.fulfilled, (state, action) => {
        // Normal states
        state.categories_news_data.isPending = false;
        state.categories_news_data.isFulfilled = true;
        state.categories_news_data.isRejected = false;

        // Success data
        state.categories_news_data.successResponse = action.payload;
      })
      .addCase(GetCategoriesNewsDataThunk.rejected, (state, action) => {
        // Normal states
        state.categories_news_data.isPending = false;
        state.categories_news_data.isFulfilled = false;
        state.categories_news_data.isRejected = true;

        // Rejected data
        state.categories_news_data.errorResponse = action.payload;
      })

      ////////////////////////////////////////
      ////////////////////////////////////////
      // Articles' data
      ////////////////////////////////////////
      ////////////////////////////////////////
      .addCase(GetArticlesNewsDataThunk.pending, (state) => {
        // Normal states
        state.articles_news_data.isPending = true;
        state.articles_news_data.isFulfilled = false;
        state.articles_news_data.isRejected = false;
      })
      .addCase(GetArticlesNewsDataThunk.fulfilled, (state, action) => {
        // Normal states
        state.articles_news_data.isPending = false;
        state.articles_news_data.isFulfilled = true;
        state.articles_news_data.isRejected = false;

        // Success data
        state.articles_news_data.successResponse = action.payload;
      })
      .addCase(GetArticlesNewsDataThunk.rejected, (state, action) => {
        // Normal states
        state.articles_news_data.isPending = false;
        state.articles_news_data.isFulfilled = false;
        state.articles_news_data.isRejected = true;

        // Rejected data
        state.articles_news_data.errorResponse = action.payload;
      })

      ////////////////////////////////////////
      ////////////////////////////////////////
      // Article news get (single)
      ////////////////////////////////////////
      ////////////////////////////////////////
      .addCase(GetArticleDataByIdThunk.pending, (state) => {
        // Normal states
        state.article_data_by_id.isPending = true;
        state.article_data_by_id.isFulfilled = false;
        state.article_data_by_id.isRejected = false;
      })
      .addCase(GetArticleDataByIdThunk.fulfilled, (state, action) => {
        // Normal states
        state.article_data_by_id.isPending = false;
        state.article_data_by_id.isFulfilled = true;
        state.article_data_by_id.isRejected = false;

        // Success data
        state.article_data_by_id.successResponse = action.payload;
      })
      .addCase(GetArticleDataByIdThunk.rejected, (state, action) => {
        // Normal states
        state.article_data_by_id.isPending = false;
        state.article_data_by_id.isFulfilled = false;
        state.article_data_by_id.isRejected = true;

        // Rejected data
        state.article_data_by_id.errorResponse = action.payload;
      });
  },
});
