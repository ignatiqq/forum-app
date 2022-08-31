import React from 'react';
import { useRoutes } from 'react-router-dom';

import { Home, Auth } from '@pages/index';

const AppRoutes = () =>
  useRoutes([
    { path: '/auth', element: <Auth /> },
    { path: '/', element: <Home /> }
  ]);

export default AppRoutes;
