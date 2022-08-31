import { call, fork, put, take } from 'redux-saga/effects';
import Cookies from 'js-cookie';

import { Response } from '@api/config';
import { BAD_REQUEST } from '@constants/errors/errors';
import login from '@api/endpoints/github/login/login';
import { ILoginViaGithubParams, ILoginViaGithubResponse } from '@api/endpoints/github/login/types';
import { FETCH_USER_LOGIN } from '../constants';
import { setUserAuthData, setUserAuthError, setUserAuthLoading } from '../slice';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@constants/storageKeys/storageKeys';
import { IGithubApiResponse, isGithubApiError } from '@/api/endpoints/github/types';

function* loginUser(loginData: ILoginViaGithubParams) {
  try {
    yield put(setUserAuthLoading(true));

    const response: Response<IGithubApiResponse<ILoginViaGithubResponse>> = yield call(
      login.login,
      loginData
    );

    if (response.status > 300) {
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
    console.error((error as Error).message);
    yield put(setUserAuthError((error as Error).message));
  } finally {
    yield put(setUserAuthLoading(false));
  }
}

export function* loginFlowWatcher() {
  while (true) {
    const { payload }: { payload: ILoginViaGithubParams } = yield take(FETCH_USER_LOGIN);
    const task: undefined = yield fork(loginUser, { ...payload });
  }
}
