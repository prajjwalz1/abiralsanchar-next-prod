"use client";
import { configureStore } from "@reduxjs/toolkit";
import { GlobalSlice } from "./common/GlobalSlice";
import { NewsPortalSlice } from "./news-portal/NewsPortalSlice";

const store = configureStore({
  reducer: {
    Global: GlobalSlice.reducer,
    NewsPortal: NewsPortalSlice.reducer,
  },
});

export default store;
