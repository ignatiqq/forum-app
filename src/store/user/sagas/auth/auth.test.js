import * as matchers from 'redux-saga-test-plan/matchers';
import * as is from '@redux-saga/is';
import Cookies from 'js-cookie';
import { expectSaga } from 'redux-saga-test-plan';

import { ACCESS_TOKEN } from '@constants/storageKeys/storageKeys';
import { githubEndpoints } from '@api/endpoints';
import { setUserAuthData, setUserAuthError, setUserAuthLoading } from '../../slice';
import { loginFlowWatcher, loginUser } from './auth';
import { throwError } from 'redux-saga-test-plan/providers';

describe('test auth sagas', () => {
  let mockRequestData;
  let mockResponseData;

  beforeEach(() => {
    mockRequestData = {
      client_id: '1',
      client_secret: '2',
      code: '123'
    };
    mockResponseData = {
      access_token: 'access',
      expires_in: 123,
      scope: '',
      token_type: 'bearer'
    };
  });

  test('test loginUser sagas fn success', () => {
    return expectSaga(loginUser, mockRequestData)
      .put(setUserAuthLoading(true))
      .put(setUserAuthLoading(false))
      .provide([
        [matchers.call.fn(githubEndpoints.login.login), { status: 200, data: mockResponseData }],
        [matchers.call.fn(Cookies.set, ACCESS_TOKEN, mockResponseData.access_token)]
      ])
      .put(setUserAuthData(mockResponseData))
      .run();
  });

  test('test loginUser sagas fn api error', () => {
    const errorMessage = 'some error';

    return expectSaga(loginUser, mockRequestData)
      .put(setUserAuthLoading(true))
      .put(setUserAuthLoading(false))
      .provide([
        [
          matchers.call.fn(githubEndpoints.login.login),
          { status: 200, data: { error: errorMessage } }
        ],
        [matchers.call.fn(console.error, errorMessage)]
      ])
      .put(setUserAuthError(errorMessage))
      .run();
  });

  test('test loginUser sagas fn api error', () => {
    const errorMessage = 'some error';
    const error = new Error(errorMessage);

    return expectSaga(loginUser, mockRequestData)
      .put(setUserAuthLoading(true))
      .put(setUserAuthLoading(false))
      .provide([
        [matchers.call.fn(githubEndpoints.login.login), throwError(error)],
        [matchers.call.fn(console.error, errorMessage)]
      ])
      .put(setUserAuthError(errorMessage))
      .run();
  });
});

describe('test loginFlowWatcher', () => {
  const cancelSpy = jest.fn((task, next) => {
    expect(is.task(task)).toBeTruthy();
    expect(task.meta.name).toBe('loginUser');
    return next();
  });

  test('login flow canceling', () => {
    return (
      expectSaga(loginFlowWatcher)
        .provide({ cancel: cancelSpy })
        .provide([[matchers.call.fn(Cookies.remove, ACCESS_TOKEN)]])
        // .put(setUserAuthLoading(false))
        // .put(setUserAuthError(null))
        .run()
    );
  });
});
