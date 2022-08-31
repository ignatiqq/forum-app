import React from 'react';
import styled from 'styled-components';

interface INavigationProps {
  customWidth?: string;
  children: React.ReactNode;
}

const StyledNavigation = styled.nav<INavigationProps>`
  display: flex;
  align-items: center;
  width: ${({ customWidth }) => customWidth || 'auto'};

  & > a {
    margin-right: 15px;
  }
`;

const Navigation: React.FC<INavigationProps> = (props) => {
  return <StyledNavigation {...props}>{props.children}</StyledNavigation>;
};

export default Navigation;
