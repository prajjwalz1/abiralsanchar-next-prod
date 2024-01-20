import { ApiSchema } from "@/utils/schemas/ReduxSchema";

export const InitialApiData: ApiSchema = {
  api: {
    // Normal checks
    isPending: false,
    isFulfilled: false,
    isRejected: false,

    // Response data
    successResponse: [],
    errorResponse: [],
  },
};
