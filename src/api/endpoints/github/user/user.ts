import { requests } from '@api/config/request';
import Cookies from 'js-cookie';
import { ACCESS_TOKEN } from '@constants/storageKeys/storageKeys';
import type { Response } from '@api/config';
import { IGithubApiResponse } from '@api/endpoints/github/types';
import { IUserInfoResponse } from '@api/endpoints/github/user/types';

const user = Object.freeze({
  info: (): Promise<Response<IGithubApiResponse<IUserInfoResponse>>> => {
    return requests.post(`${process.env.GITHUB_API_URL}/user?access_token=${Cookies.get(ACCESS_TOKEN)}`, null, {
      headers: {
        Authorization: `Bearer ${Cookies.get(ACCESS_TOKEN)}`
      }
    });
  }
});

export default user;
