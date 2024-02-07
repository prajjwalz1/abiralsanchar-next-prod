import dataService from "@/utils/data/api/news-portal/dataService";
import { getReduxErrorMsg } from "@/utils/methods/reduxMethods";
import { createAsyncThunk } from "@reduxjs/toolkit";

/**
 * @Title
 * Get all homepage data
 *
 * @API
 * http://jsugauta1.pythonanywhere.com/api/v1/news/homepage/
 *
 * @Description
 * Navbar Category - ID, Name, Slug Featured Articles Trending Articles Latest Articles Categorized Articles i.e. 5 Articles per Category
 *
 **/
export const GetHomepageDataThunk = createAsyncThunk(
  "GetHomepageDataThunk",
  async (_, thunkAPI) => {
    try {
      return await dataService.getData("/api/v1/news/homepage/");
    } catch (error: any) {
      return thunkAPI.rejectWithValue(getReduxErrorMsg(error));
    }
  }
);

// categories news get (whole)
export const GetCategoriesNewsDataThunk = createAsyncThunk(
  "GetCategoriesNewsDataThunk",
  async (slug: string, thunkAPI) => {
    try {
      return await dataService.getData(`/api/v1/news/article/${slug}`);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(getReduxErrorMsg(error));
    }
  }
);

// article news get (single)
export const GetArticleDataByIdThunk = createAsyncThunk(
  "GetArticleDataByIdThunk",
  async (id: number, thunkAPI) => {
    try {
      return await dataService.getData(`/api/v1/news/article/${id}`);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(getReduxErrorMsg(error));
    }
  }
);
