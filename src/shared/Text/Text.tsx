import React from 'react';
import styled from 'styled-components';

interface ITextProps {
  children: React.ReactNode;
  fontSize?: string;
  textAlign?: string;
  fontWeight?: string;
  margin?: string;
  maxWidth?: string;
}

const StyledText = styled.div<ITextProps>`
  font-size: ${({ fontSize }) => fontSize || '16px'};
  text-align: ${({ textAlign }) => textAlign || 'start'};
  margin: ${({ margin }) => margin || '0'};
  font-weight: ${({ fontWeight }) => fontWeight};
  max-width: ${({ maxWidth }) => maxWidth};
`;

const Text: React.FC<ITextProps> = (props) => {
  return <StyledText {...props}>{props.children}</StyledText>;
};

export default Text;
