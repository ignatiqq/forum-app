import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { Home, Auth } from '@pages/index';
import PrivateRoute from '@routes/PrivateRoute/PrivateRoute';
import Cookies from 'js-cookie';
import { REFRESH_TOKEN } from '@constants/storageKeys/storageKeys';

const AuthPage = () => {
  if (Cookies.get(REFRESH_TOKEN)) {
    return <Navigate to={'/'} />;
  }
  return <Auth />;
};

const AppRoutes = () =>
  useRoutes([
    { path: '/auth', element: <AuthPage /> },
    { path: '/', element: <PrivateRoute Component={Home} /> }
  ]);

export default AppRoutes;
