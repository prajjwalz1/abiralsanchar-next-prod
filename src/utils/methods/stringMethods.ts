export const getUniqueKey = (idx: number, value: string) => `${idx}. ${value}`;

// Get the query params of the url
export const getQueryParams = (url: string): Record<string, string> => {
  const queryParams = new URLSearchParams(new URL(url).search);
  const params: Record<string, string> = {};

  queryParams.forEach((value, key) => {
    params[key] = value;
  });

  return params;
};
