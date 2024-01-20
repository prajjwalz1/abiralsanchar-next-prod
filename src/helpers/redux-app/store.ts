"use client";
import { configureStore } from "@reduxjs/toolkit";
import { GlobalReducer } from "./common/GlobalReducer";

const store = configureStore({
  reducer: {
    Global: GlobalReducer.reducer,
  },
});

export default store;
