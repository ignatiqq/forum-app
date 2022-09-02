import { takeLatest, call, put } from 'redux-saga/effects';
import { getUserInfo } from '@store/user/actions';
import {
  IUserStateInfo,
  setUserInfoData,
  setUserInfoLoading,
  setUserInfoRequestError
} from '@store/user/slice';
import { githubEndpoints } from '@api/endpoints';
import { Response } from '@api/config';
import { IGithubApiResponse, isGithubApiError } from '@api/endpoints/github/types';
import { IUserInfoResponse } from '@api/endpoints/github/user/types';
import { BAD_REQUEST } from '@constants/errors/errors';
import { mappedUserInfoData } from '@api/endpoints/github/user/adapters';

export function* getUserInfoHandler() {
  try {
    yield put(setUserInfoLoading(true));

    const response: Response<IGithubApiResponse<IUserInfoResponse>> = yield call(
      githubEndpoints.user.info
    );

    if (response.status > 300) {
      throw new Error(BAD_REQUEST(response.status));
    }

    if (isGithubApiError(response.data)) {
      throw new Error(response.data.error);
    }

    yield put(setUserInfoData(mappedUserInfoData(response.data)));
  } catch (error) {
    yield put(setUserInfoRequestError((error as Error).message));
  } finally {
    yield put(setUserInfoLoading(false));
  }
}

export function* getUserInfoWatcher() {
  yield takeLatest(getUserInfo, getUserInfoHandler);
}
