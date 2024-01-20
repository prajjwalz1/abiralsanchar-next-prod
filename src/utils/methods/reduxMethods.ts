import { ReduxErrorMessageSchema } from "../schemas/ReduxSchema";

export const getReduxErrorMsg = (error: ReduxErrorMessageSchema) => {
  return (
    (error.response && error.response.data && error.response.data.message) ||
    error.message ||
    error.toString()
  );
};
