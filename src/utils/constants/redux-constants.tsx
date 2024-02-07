import { HeaderIDSchema, HomepageIDSchema } from "@/utils/schemas/ReduxSchema";
import { get_homepage_data } from "../data/backend_data";

export const NORMAL_CHECK = {
  // Normal checks
  isPending: false,
  isFulfilled: false,
  isRejected: false,
};

export const HOMEPAGE_INITIAL_DATA: HomepageIDSchema = {
  ...NORMAL_CHECK,

  // Response data
  successResponse: { success: false, data: [] },
  testResponse: get_homepage_data,
  errorResponse: [],
};

// Default state of current news in header section
export const HEADER_INITIAL_DATA: HeaderIDSchema = {
  featured: {
    is_featured: false,
    featured_data: [],
    // featured_data: [],
    featured_title: "चित्रित",
  },
  latest: {
    is_latest: false,
    latest_data: [],
    // latest_data: [],
    latest_title: "ताजा अपडेट",
  },
  trending: {
    is_trending: false,
    trending_data: [],
    // trending_data: [],
    trending_title: "ट्रेन्डिङ",
  },
};

export const CATEGORIES_NEWS_INITIAL_DATA: HomepageIDSchema = {
  ...NORMAL_CHECK,

  // Response data
  successResponse: { success: false, data: [] },
  testResponse: { success: false, data: [] },
  errorResponse: [],
};

export const ARTICLE_INITIAL_DATA: HomepageIDSchema = {
  ...NORMAL_CHECK,

  // Response data
  successResponse: { success: false, data: [] },
  testResponse: { success: false, data: [] },
  errorResponse: [],
};

export const CURRENT_NEWS_TYPE = ["trending", "latest", "featured"];
