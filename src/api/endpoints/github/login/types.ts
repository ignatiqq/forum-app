export interface ILoginViaGithubParams {
  code: string;
  client_id: string;
  client_secret: string;
}

export interface ILoginViaGithubResponse {
  access_token: string;
  scope: string;
  token_type: string;
}
