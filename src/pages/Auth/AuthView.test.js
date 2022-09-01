import React from 'react';
import '@testing-library/jest-dom';
import { getByText, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AuthView from '@pages/Auth/AuthView';
import { renderWithRouterAndRedux } from '@_tests_/utils/renderWith';

describe('AuthView test', () => {
  let mockAuthData = function ({ isLoading = false, error = null, data = null }) {
    return {
      isLoading,
      error,
      data
    };
  };
  const cancelBtnTestId = 'cancel-login-btn';
  const authByGithubLink = 'auth-by-github-link';
  const loginLink = 'https://github.com/login/oauth/authorize?client_id=Iv1.da154f760a9b22b7';

  test('Static auth view', () => {
    const cancelFn = jest.fn();

    const { queryByTestId, getByTestId } = renderWithRouterAndRedux({
      component: <AuthView authData={mockAuthData()} cancelAuthHandler={cancelFn} />
    });

    expect(queryByTestId(cancelBtnTestId)).not.toBeInTheDocument();
    expect(getByTestId(authByGithubLink)).toBeInTheDocument();
    expect(getByTestId(authByGithubLink)).toHaveAttribute('href', loginLink);
  });

  test('AuthView while login loading', () => {
    const cancelFn = jest.fn();

    const { queryByTestId, getByTestId } = renderWithRouterAndRedux({
      component: (
        <AuthView authData={mockAuthData({ isLoading: true })} cancelAuthHandler={cancelFn} />
      )
    });

    expect(getByTestId(cancelBtnTestId)).toBeInTheDocument();
    expect(queryByTestId(authByGithubLink)).not.toBeInTheDocument();

    // userEvent.click();
    //
    // expect(cancelFn).toBeCalledTimes(1);

    // add logic with auth link return in the document
  });

  test('AuthView while login error', () => {
    const cancelFn = jest.fn();

    const { getByTestId, getByText } = renderWithRouterAndRedux({
      component: (
        <AuthView authData={mockAuthData({ error: 'error' })} cancelAuthHandler={cancelFn} />
      )
    });

    expect(getByTestId('error-title-login')).toBeInTheDocument();
    expect(getByText(/Some error occured/)).toBeInTheDocument();
  });
});
