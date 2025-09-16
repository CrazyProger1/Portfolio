export type Response = {
  success: boolean;
};

export type SuccessfulResponse = {
  success: true;
} & Response;

export type ErrorResponse = {
  success: false;
  message?: string;
} & Response;

export type PaginatedResponse<T> = {
  next?: string;
  previous?: string;
  count: number;
  results: T[];
} & SuccessfulResponse;

export type PaginationParams = {
  offset?: string;
  limit?: string;
};
