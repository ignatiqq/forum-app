import React from 'react';

import { Button, NavigationLink } from '@atoms/index';
import { Navigation } from "@molecules/index";
import { Container,   Header } from './layouts';

const App = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <NavigationLink to="/">Main</NavigationLink>
          <NavigationLink to="/login">Login</NavigationLink>
        </Navigation>
      </Header>
    </Container>
  )
}

export default App;