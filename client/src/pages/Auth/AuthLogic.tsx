import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useAppDispatch } from '@/store';
import { fetchUserLogin } from '@/store/user/actions';

const AuthLogic = (Component: React.FC) => () => {
  const location = useLocation();

  const dispatch = useAppDispatch();

  const authorizeUserHandler = (authCode: string) => {
    dispatch(
      fetchUserLogin({
        client_id: `${process.env.GITHUB_CLIENT_ID}`,
        client_secret: `${process.env.GITHUB_CLIENT_SECRET}`,
        code: authCode
      })
    );
  };

  useEffect(() => {
    const authCode = new URLSearchParams(location.search).get('code');

    if (authCode) {
      authorizeUserHandler(authCode);
    }
  }, [location.search]);

  return <Component />;
};

export default AuthLogic;
