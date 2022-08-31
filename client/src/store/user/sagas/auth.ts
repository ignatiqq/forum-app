import { Response } from '@/api/config';
import { BAD_REQUEST } from '@constants/errors/errors';
import login from '@api/endpoints/github/login/login';
import { ILoginViaGithubParams, ILoginViaGithubResponse } from '@api/endpoints/github/login/types';
import { call, fork, put, take } from 'redux-saga/effects';
import { FETCH_USER_LOGIN } from '../constants';
import { setUserAuthData, setUserAuthLoading } from '../slice';

function* loginUser(loginData: ILoginViaGithubParams) {
  try {
    yield put(setUserAuthLoading(true));

    const response: Response<ILoginViaGithubResponse> = yield call(login.login, loginData);

    if(response.status > 300) {
        throw new Error(BAD_REQUEST(response.status));
    }
  } catch (error) {
    console.error((error as Error).message);
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
