"use client";
import { configureStore } from "@reduxjs/toolkit";
import { GlobalSlice } from "./common/GlobalSlice";

const store = configureStore({
  reducer: {
    Global: GlobalSlice.reducer,
  },
});

export default store;
