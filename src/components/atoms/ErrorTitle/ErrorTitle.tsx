import React from 'react';
import styled from 'styled-components';

interface IErrorTitleProps {
  padding?: string;
  margin?: string;
  fontSize?: string;
  children: React.ReactNode;
}

const StyledError = styled.div<IErrorTitleProps>`
  color: ${(props) => props.theme.colors.error || 'red'};
  font-size: ${({ fontSize }) => fontSize || '18px'};
  margin: ${({ margin }) => margin || '10px 0px'};
  max-width: 500px;
`;

const ErrorTitle: React.FC<IErrorTitleProps> = (props) => {
  return <StyledError {...props}>Some error occured: {props.children}</StyledError>;
};

export default ErrorTitle;
