import { call, fork, put, take, cancelled, cancel } from 'redux-saga/effects';
import Cookies from 'js-cookie';
import { StrictEffect, Task } from '@redux-saga/types';

import { Response } from '@api/config';
import { BAD_REQUEST } from '@constants/errors/errors';
import { githubEndpoints } from '@api/endpoints';
import { ILoginViaGithubParams, ILoginViaGithubResponse } from '@api/endpoints/github/login/types';
import { cancelUserLogin, fetchUserLogin } from '@store/user/actions';
import { setUserAuthData, setUserAuthError, setUserAuthLoading } from '../slice';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@constants/storageKeys/storageKeys';
import { IGithubApiResponse, isGithubApiError } from '@api/endpoints/github/types';
import { AnyAction } from '@reduxjs/toolkit';

export function* loginUser(loginData: ILoginViaGithubParams) {
  try {
    yield put(setUserAuthLoading(true));

    const response: Response<IGithubApiResponse<ILoginViaGithubResponse>> = yield call(
      githubEndpoints.login.login,
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
    yield call(console.error, (error as Error).message);
    yield put(setUserAuthError((error as Error).message));
  } finally {
    const cancelledSaga: boolean = yield cancelled();
    if (cancelledSaga) {
      yield call(console.log, 'cancelled');
      yield put(setUserAuthError(null));
      yield call(Cookies.remove, REFRESH_TOKEN);
      yield call(Cookies.remove, ACCESS_TOKEN);
    }
    yield put(setUserAuthLoading(false));
  }
}

export function* loginFlowWatcher() {
  while (true) {
    const { payload }: { payload: ILoginViaGithubParams } = yield take(fetchUserLogin);
    const task: Task = yield fork(loginUser, { ...payload });

    const action: AnyAction = yield take(cancelUserLogin);
    if (action.type === cancelUserLogin.type) {
      yield cancel(task);
    }
  }
}
