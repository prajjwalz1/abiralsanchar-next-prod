//////////////////////////////
// Redux error message type

import { ArticleSchema, GetHomepageResponseSchema } from "./ApiSchema";

//////////////////////////////
export type ReduxErrorMessageSchema = {
  response?: {
    data?: {
      message?: string;
    };
  };
  message?: string;
  toString(): string;
};

// Header
export type CurrentNewsTypeSchema = "trending" | "featured" | "latest";
export type HeaderIDSchema = {
  latest: {
    is_latest: boolean;
    latest_data: ArticleSchema[];
    latest_title: string;
  };
  trending: {
    is_trending: boolean;
    trending_data: ArticleSchema[];
    trending_title: string;
  };
  featured: {
    is_featured: boolean;
    featured_data: ArticleSchema[];
    featured_title: string;
  };
};

export type HeaderStateMap = {
  [key: string]: {
    is_featured: boolean;
    is_trending: boolean;
    is_latest: boolean;
  };
};

//////////////////////////////
// API response schema
//////////////////////////////
export type CommonApiSchema = {
  isPending?: boolean;
  isFulfilled?: boolean;
  isRejected?: boolean;
};
export interface HomepageIDSchema extends CommonApiSchema {
  successResponse?: GetHomepageResponseSchema | {};
  testResponse?: GetHomepageResponseSchema;
  errorResponse?: any | {};
}
