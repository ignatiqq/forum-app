import { call, spawn, all, put } from 'redux-saga/effects';
import Cookies from 'js-cookie';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@constants/storageKeys/storageKeys';
import { BAD_REQUEST, NOT_ATHORIZED } from '@constants/errors/errors';
import { IGithubApiResponse, isGithubApiError } from '@api/endpoints/github/types';
import { ILoginViaGithubResponse } from '@api/endpoints/github/login/types';
import { githubEndpoints } from '@api/endpoints';
import { setUserAuthData, setUserAuthError, setUserAuthLoading } from '@store/user/slice';
import { Response } from '@api/config';

export function* refreshTokenHandler() {
  try {
    const refreshToken: string | undefined = yield call(Cookies.get as any, REFRESH_TOKEN);

    if (!refreshToken) {
      throw new Error(NOT_ATHORIZED);
    }

    yield put(setUserAuthLoading(true));

    const requestData = {
      refresh_token: refreshToken,
      client_id: `${process.env.GITHUB_CLIENT_ID}`,
      client_secret: `${process.env.GITHUB_CLIENT_SECRET}`
    }

    const response: Response<IGithubApiResponse<ILoginViaGithubResponse>> = yield call(
      githubEndpoints.login.refresh,
      requestData
    );

    if (response.status >= 300) {
      throw new Error(BAD_REQUEST(response.status));
    }

    if (isGithubApiError(response.data)) {
      throw new Error(response.data.error);
    } else {
      yield put(setUserAuthData(response.data));
      yield call(Cookies.set, REFRESH_TOKEN, response.data.refresh_token);
      yield call(Cookies.set, ACCESS_TOKEN, response.data.access_token);
    }
  } catch (error) {
    yield call(console.error, (error as Error).message);
    yield put(setUserAuthError((error as Error).message));

    yield call(Cookies.remove, REFRESH_TOKEN);
    yield call(Cookies.remove, ACCESS_TOKEN);
  } finally {
    yield put(setUserAuthLoading(false));
  }
}
export function* initAppRequestsWatcher() {
  yield all([spawn(refreshTokenHandler)]);
}
