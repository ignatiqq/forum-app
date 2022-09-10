import React from 'react';
import styled from 'styled-components';

interface IWrapperProps {
  children: React.ReactNode;
  margin?: string;
  padding?: string;
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  border?: string;
  position?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

type IStyledWrapperProps = Omit<IWrapperProps, 'children'>;

const StyledWrapper = styled.div<IStyledWrapperProps>`
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  width: ${({ width }) => width || 'auto'};
  max-width: ${({ maxWidth }) => maxWidth || 'auto'};
  min-width: ${({ minWidth }) => minWidth || 'auto'};
  border: ${({ border }) => border};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
`;

const Wrapper: React.FC<IWrapperProps> = (props) => {
  return <StyledWrapper {...props}>{props.children}</StyledWrapper>;
};

export default Wrapper;
