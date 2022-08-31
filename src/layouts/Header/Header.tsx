import React from 'react';
import styled from 'styled-components';

import { Button, NavigationLink } from '@atoms/index';
import { Navigation } from '@molecules/index';
import { Flex } from '@/styled';

const HeaderEl = styled.header`
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 30px;
`;

const Header = () => {
  return (
    <HeaderEl>
      <Navigation customWidth="100%">
        <Flex customWidth="100%" alignItems="center" justifyContent="space-between">
          <div>
            <NavigationLink to="/">Main</NavigationLink>
          </div>
          <div>
            <NavigationLink to="/auth">Auth</NavigationLink>
          </div>
        </Flex>
      </Navigation>
    </HeaderEl>
  );
};

export default Header;
