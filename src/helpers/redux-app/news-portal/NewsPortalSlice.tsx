import { createSlice } from "@reduxjs/toolkit";
import { GetHomepageDataThunk } from "./_thunks";
import { HomepageDataInitial } from "@/utils/constants/redux-constants";
import { HomepageDataSchema } from "@/utils/schemas/ReduxSchema";

type ISchema = {
  homepage_data: HomepageDataSchema;
};

const initialState: ISchema = {
  homepage_data: HomepageDataInitial,
};

export const NewsPortalSlice = createSlice({
  name: "news-portal/NewsPortalSlice",
  initialState,
  reducers: {},
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
