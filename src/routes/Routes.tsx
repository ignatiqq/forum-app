import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { Home, Auth, Profile } from '@pages/index';
import PrivateRoute from '@routes/PrivateRoute/PrivateRoute';
import Cookies from 'js-cookie';
import { ACCESS_TOKEN } from '@constants/storageKeys/storageKeys';

const AuthPage = () => {
  if (Cookies.get(ACCESS_TOKEN)) {
    return <Navigate to={'/'} />;
  }
  return <Auth />;
};

const AppRoutes = () =>
  useRoutes([
    { path: '/auth', element: <AuthPage /> },
    { path: '/', element: <PrivateRoute Component={Home} /> },
    { path: '/test', element: <div>Test</div> },
    {
      path: '/profile',
      children: [
        {
          path: '/profile/:id',
          element: <Profile />
        }
      ]
    }
  ]);

export default AppRoutes;
