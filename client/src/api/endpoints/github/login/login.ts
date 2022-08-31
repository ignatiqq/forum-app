import githubAPI from '../config';
import { paramsToString } from '@utils/request';
import type { ILoginViaGithubParams, ILoginViaGithubResponse } from './types';
import type { Response } from '@api/config';
import { requests } from '@/api/config/request';
import { IGithubApiResponse } from '../types';

const login = Object.freeze({
  login({
    code,
    client_id,
    client_secret
  }: ILoginViaGithubParams): Promise<Response<IGithubApiResponse<ILoginViaGithubResponse>>> {
    return process.env.NODE_ENV === 'development'
      ? requests.post(
          `https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token?${paramsToString(
            { code, client_id, client_secret }
          )}`,
          null,
          {
            headers: {
              Accept: 'application/json'
            }
          }
        )
      : githubAPI.post(
          `/login/oauth/access_token?${paramsToString({ code, client_id, client_secret })}`,
          null,
          {
            headers: {
              Accept: 'application/json'
            }
          }
        );
  }
});

export default login;
