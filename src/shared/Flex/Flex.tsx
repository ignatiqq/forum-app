import React from 'react';
import styled from 'styled-components';

interface IFlexProps {
  flexDirection?: 'row' | 'column';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
  customWidth?: string;
  children: React.ReactNode;
  customHeight?: string;
  margin?: string;
  minWidth?: string;
}

const StyledFlex = styled.div<IFlexProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
  justify-content: ${({ justifyContent }) => justifyContent || 'stretch'};
  width: ${({ customWidth }) => customWidth || 'auto'};
  height: ${({ customHeight }) => customHeight};
  margin: ${({ margin }) => margin};
  min-width: ${({ minWidth }) => minWidth};
`;

const Flex: React.FC<IFlexProps> = (props) => {
  return <StyledFlex {...props}>{props.children}</StyledFlex>;
};

export default Flex;
