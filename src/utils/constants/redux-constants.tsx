import {
  HeaderStateMap,
  HomepageDataSchema,
} from "@/utils/schemas/ReduxSchema";
import { get_homepage_data } from "../data/backend_data";

export const homepageDataInitialData: HomepageDataSchema = {
  // Normal checks
  isPending: false,
  isFulfilled: false,
  isRejected: false,

  // Response data
  successResponse: {},
  testResponse: get_homepage_data,
  errorResponse: [],
};

// Default state of current news in header section
export const headerInitialData = {
  featured: {
    data: [],
    is_featured: false,
  },
  latest: {
    data: [],
    is_latest: false,
  },
  trending: {
    data: [],
    is_trending: false,
  },
};

// This constant is used to change the state of the current news in header section
export const headerStateMap: HeaderStateMap = {
  featured: { is_trending: false, is_latest: false, is_featured: true },
  latest: { is_trending: false, is_latest: true, is_featured: false },
  trending: { is_trending: true, is_latest: false, is_featured: false },
};
