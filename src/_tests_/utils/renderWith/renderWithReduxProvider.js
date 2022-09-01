import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from '@store/rootReducer';

const renderWithRedux = (component, initialState) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState
  });

  return <Provider store={store}>{component}</Provider>;
};

export default renderWithRedux;
