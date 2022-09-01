import React from 'react';
import { useRoutes } from 'react-router-dom';

import { Home, Auth } from '@pages/index';
import PrivateRoute from '@routes/PrivateRoute/PrivateRoute';

const AppRoutes = () =>
  useRoutes([
    { path: '/auth', element: <Auth /> },
    { path: '/', element: <PrivateRoute Component={Home} /> }
  ]);

export default AppRoutes;
