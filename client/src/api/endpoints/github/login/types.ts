export interface ILoginViaGithubParams {
  code: string;
  client_id: string;
  client_secret: string;
}

export interface ILoginViaGithubResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope: string;
  token_type: string;
}
