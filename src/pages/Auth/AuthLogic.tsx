import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@store/index';
import { cancelUserLogin, fetchUserLogin } from '@store/user/actions';
import type { IAuthProps } from '@pages/Auth/AuthView';

const AuthLogic = (Component: React.FC<IAuthProps>) => () => {
  const location = useLocation();

  const dispatch = useAppDispatch();

  const { auth } = useAppSelector(({ userSlice }) => ({
    auth: userSlice.auth
  }));

  const authorizeUserHandler = (authCode: string) => {
    dispatch(
      fetchUserLogin({
        client_id: `${process.env.GITHUB_CLIENT_ID}`,
        client_secret: `${process.env.GITHUB_CLIENT_SECRET}`,
        code: authCode
      })
    );
  };

  const cancelAuthHandler = () => {
    dispatch(cancelUserLogin());
  };

  useEffect(() => {
    const authCode = new URLSearchParams(location.search).get('code');

    if (authCode) {
      authorizeUserHandler(authCode);
    }
  }, [location.search]);

  return <Component authData={auth} cancelAuthHandler={cancelAuthHandler} />;
};

export default AuthLogic;
