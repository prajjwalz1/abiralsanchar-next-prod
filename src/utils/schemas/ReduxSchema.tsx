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
