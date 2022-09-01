import React from 'react';
import { renderWithRouter, renderWithRedux } from '@_tests_/utils/renderWith/index';
import { render } from '@testing-library/react';

const renderWithRouterAndRedux = ({ component, initialState = {}, initialRoute = '/' }) => {
  return render(renderWithRedux(renderWithRouter(component, initialRoute), initialState));
};

export default renderWithRouterAndRedux;
