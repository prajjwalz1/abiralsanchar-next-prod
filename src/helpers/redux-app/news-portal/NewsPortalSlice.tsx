import { createSlice } from "@reduxjs/toolkit";
import { GetHomepageDataThunk } from "./_thunks";
import * as C from "@/utils/constants/redux-constants";
import * as S from "@/utils/schemas/ReduxSchema";

type ISchema = {
  header: S.HeaderSchema;
  homepage_data: S.HomepageDataSchema;
};

const initialState: ISchema = {
  header: C.headerInitialData,
  homepage_data: C.homepageDataInitialData,
};

export const NewsPortalSlice = createSlice({
  name: "news-portal/NewsPortalSlice",
  initialState,
  reducers: {
    setIsCurrentNews: (state, action) => {
      state.header = {
        ...state.header,
        ...C.headerStateMap[action.payload],
      };
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
        // Normal states
        state.homepage_data.isPending = false;
        state.homepage_data.isFulfilled = true;
        state.homepage_data.isRejected = false;

        // Api states
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
