import { refreshTokenHandler } from '@store/app/sagas/initAppRequests';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { setUserAuthData, setUserAuthError, setUserAuthLoading } from '@store/user/slice';
import { githubEndpoints } from '@api/endpoints';
import { ACCESS_TOKEN } from '@constants/storageKeys/storageKeys';
import Cookies from 'js-cookie';
import { BAD_REQUEST, NOT_ATHORIZED } from '@constants/errors/errors';
import { throwError } from 'redux-saga-test-plan/providers';

describe('test initAppRequests sagas', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('refreshTokenHandler saga success', () => {
    jest.spyOn(Cookies, 'get').mockReturnValue('token');

    const responseData = {
      access_token: 'access',
      expires_in: 123,
      scope: '',
      token_type: 'bearer'
    };

    return expectSaga(refreshTokenHandler)
      .put(setUserAuthLoading(true))
      .put(setUserAuthLoading(false))
      .provide([
        [matchers.call.fn(githubEndpoints.login.refresh), { status: 200, data: responseData }],
        [matchers.call.fn(Cookies.set, ACCESS_TOKEN, responseData.access_token)]
      ])
      .put(setUserAuthData(responseData))
      .run();
  });

  test('refreshTokenHandler saga with no refreshtoken', () => {
    return expectSaga(refreshTokenHandler)
      .put(setUserAuthLoading(false))
      .put(setUserAuthError(NOT_ATHORIZED))
      .run();
  });

  test('refreshTokenHandler saga with status error', () => {
    jest.spyOn(Cookies, 'get').mockReturnValue('token');

    const responseData = {
      access_token: 'access',
      expires_in: 123,
      scope: '',
      token_type: 'bearer'
    };

    return expectSaga(refreshTokenHandler)
      .put(setUserAuthLoading(true))
      .put(setUserAuthLoading(false))
      .provide([
        [matchers.call.fn(githubEndpoints.login.refresh), { status: 300, data: responseData }],
        [matchers.call.fn(Cookies.remove, ACCESS_TOKEN)]
      ])
      .put(setUserAuthError(BAD_REQUEST(300)))
      .run();
  });

  test('refreshTokenHandler saga with uncatched error', () => {
    jest.spyOn(Cookies, 'get').mockReturnValue('token');

    const errorText = 'error';
    const error = new Error(errorText);

    return expectSaga(refreshTokenHandler)
      .put(setUserAuthLoading(true))
      .put(setUserAuthLoading(false))
      .provide([
        [matchers.call.fn(githubEndpoints.login.refresh), throwError(error)],
        [matchers.call.fn(Cookies.remove, ACCESS_TOKEN)]
      ])
      .put(setUserAuthError(error.message))
      .run();
  });
});
