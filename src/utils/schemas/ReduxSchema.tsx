//////////////////////////////
// Redux error message type
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
export type ApiSchema = {
  api: {
    // Normal checks
    isPending?: boolean;
    isFulfilled?: boolean;
    isRejected?: boolean;

    // Response data
    successResponse?: any;
    errorResponse?: any;
  };
};
