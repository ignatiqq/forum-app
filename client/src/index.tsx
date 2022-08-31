import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';

import { githubClient } from '@api/clients';
import '@styles/global';
import store from './store';
import App from './App';

const root = createRoot(document.getElementById('root')!);

const Root = (
  <ApolloProvider client={githubClient}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </ApolloProvider>
);

root.render(Root);
