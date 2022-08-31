export interface IGithubApiErrorResponse {
  error: string;
  error_description: string;
  error_uri: string;
}

export type IGithubApiResponse<T> = T | IGithubApiErrorResponse;

export function isGithubApiError<T>(data: IGithubApiResponse<T>): data is IGithubApiErrorResponse {
  return 'error' in data;
}
