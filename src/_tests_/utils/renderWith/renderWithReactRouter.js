import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Routes from '@routes/Routes';

export const renderWithRouter = (component, initialRoute = '/') => {
  return (
    <MemoryRouter initialEntries={[initialRoute]}>
      <Routes />
      {component}
    </MemoryRouter>
  );
};

export default renderWithRouter;
