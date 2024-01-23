import { HeaderIDSchema, HomepageIDSchema } from "@/utils/schemas/ReduxSchema";
import { get_homepage_data } from "../data/backend_data";

export const HOMEPAGE_INITIAL_DATA: HomepageIDSchema = {
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
export const HEADER_INITIAL_DATA: HeaderIDSchema = {
  featured: {
    is_featured: false,
    featured_data: get_homepage_data.data[2].trending_articles,
    // featured_data: [],
    featured_title: "चित्रित",
  },
  latest: {
    is_latest: false,
    latest_data: get_homepage_data.data[3].latest_articles,
    // latest_data: [],
    latest_title: "ताजा अपडेट",
  },
  trending: {
    is_trending: false,
    trending_data: get_homepage_data.data[1].featured_articles,
    // trending_data: [],
    trending_title: "ट्रेन्डिङ",
  },
};

export const CURRENT_NEWS_TYPE = ["trending", "latest", "featured"];
