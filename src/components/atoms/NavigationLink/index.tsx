import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationLink = styled(Link)`
  color: ${(props) => props.theme.colors.primaryText};
  text-decoration: none;
  font-size: ${(props) => props.theme.fonts.normal};

  &:hover {
    color: ${(props) => props.theme.colors.secondaryText};
  }
`;

export default NavigationLink;
