//////////////////////////////
// Redux error message type

import { GetHomepageResponseSchema } from "./ApiSchema";

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
export type HeaderSchema = {
  latest: {
    data: any[];
    is_latest: boolean;
  };
  trending: {
    data: any[];
    is_trending: boolean;
  };
  featured: {
    data: any[];
    is_featured: boolean;
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
export interface HomepageDataSchema extends CommonApiSchema {
  successResponse?: GetHomepageResponseSchema | {};
  testResponse?: GetHomepageResponseSchema;
  errorResponse?: any | {};
}
