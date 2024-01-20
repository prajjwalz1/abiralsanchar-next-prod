import { HomepageDataSchema } from "@/utils/schemas/ReduxSchema";
import { get_homepage_data } from "../data/backend_data";

export const HomepageDataInitial: HomepageDataSchema = {
  // Normal checks
  isPending: false,
  isFulfilled: false,
  isRejected: false,

  // Response data
  successResponse: {},
  testResponse: get_homepage_data,
  errorResponse: [],
};
