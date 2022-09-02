import React, { useEffect } from 'react';
import { useAppSelector } from '@/store';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { REFRESH_TOKEN } from '@constants/storageKeys/storageKeys';

interface IPrivateRoute {
  Component: React.FC<any>;
}

const PrivateRoute: React.FC<IPrivateRoute> = ({ Component }) => {
  const navigate = useNavigate();

  const { auth } = useAppSelector(({ userSlice }) => ({
    auth: userSlice.auth
  }));

  useEffect(() => {
    if ((!auth.isLoading && !auth.data && auth.error) || !Cookies.get(REFRESH_TOKEN)) {
      navigate('/auth');
    }
  }, [auth]);

  if (auth.isLoading && !auth.data?.refresh_token) {
    return <div>Loading...</div>;
  }

  return <Component />;
};

export default PrivateRoute;
