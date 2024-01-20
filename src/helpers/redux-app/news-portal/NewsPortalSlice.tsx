import { createSlice } from "@reduxjs/toolkit";
import { GetHomepageDataThunk } from "./_thunks";
import { ApiSchema } from "@/utils/schemas/ReduxSchema";
import { InitialApiData } from "@/utils/constants/redux-constants";

interface ISchema extends ApiSchema {}

const initialState: ISchema = {
  ...InitialApiData,
};

export const NewsPortalSlice = createSlice({
  name: "news-portal/NewsPortalSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetHomepageDataThunk.pending, (state) => {
        // Normal states
        state.api.isPending = true;
        state.api.isFulfilled = false;
        state.api.isRejected = false;
      })
      .addCase(GetHomepageDataThunk.fulfilled, (state, action) => {
        // Normal states
        state.api.isPending = false;
        state.api.isFulfilled = true;
        state.api.isRejected = false;

        // Api states
        state.api.successResponse = action.payload;
      })
      .addCase(GetHomepageDataThunk.rejected, (state, action) => {
        // Normal states
        state.api.isPending = false;
        state.api.isFulfilled = false;
        state.api.isRejected = true;

        // Api states
        state.api.errorResponse = action.payload;
      });
  },
});
