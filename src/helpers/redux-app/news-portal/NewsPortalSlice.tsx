import { createSlice } from "@reduxjs/toolkit";
import { GetHomepageDataThunk } from "./_thunks";
import * as C from "@/utils/constants/redux-constants";
import * as S from "@/utils/schemas/ReduxSchema";

type ISchema = {
  header: S.HeaderIDSchema;
  homepage_data: S.HomepageIDSchema;
};

const initialState: ISchema = {
  header: C.HEADER_INITIAL_DATA,
  homepage_data: C.HOMEPAGE_INITIAL_DATA,
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

        // Homepage
        state.homepage_data.successResponse = action.payload;
      })
      .addCase(GetHomepageDataThunk.rejected, (state, action) => {
        // Normal states
        state.homepage_data.isPending = false;
        state.homepage_data.isFulfilled = false;
        state.homepage_data.isRejected = true;

        // Api states
        state.homepage_data.errorResponse = action.payload;
      });
  },
});
