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
export type LatestSchema = {
  is_latest: boolean;
  latest_data: ArticleSchema[];
  latest_title: string;
};
export type TrendingSchema = {
  is_trending: boolean;
  trending_data: ArticleSchema[];
  trending_title: string;
};
export type FeaturedSchema = {
  is_featured: boolean;
  featured_data: ArticleSchema[];
  featured_title: string;
};
export type HeaderIDSchema = {
  latest: LatestSchema;
  trending: TrendingSchema;
  featured: FeaturedSchema;
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
  successResponse: GetHomepageResponseSchema;
  testResponse?: GetHomepageResponseSchema;
  errorResponse?: any | {};
}

export interface CategoriesNewsDataSchema extends CommonApiSchema {
  successResponse: any;
  testResponse?: any;
  errorResponse?: any | {};
}

export interface CategoryDataBySlugSchema extends CommonApiSchema {
  successResponse: any;
  testResponse?: any;
  errorResponse?: any | {};
}

export interface ArticlesNewsDataSchema extends CommonApiSchema {
  successResponse: any;
  testResponse?: any;
  errorResponse?: any | {};
}

export interface ArticleDataByIdSchema extends CommonApiSchema {
  successResponse: any;
  testResponse?: any;
  errorResponse?: any | {};
}
