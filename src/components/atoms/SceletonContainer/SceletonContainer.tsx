import React from 'react';
import styled from 'styled-components';

interface ISeletonContainerProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
}

const StyledSceletonContainer = styled.div<ISeletonContainerProps>`
  background: rgba(0, 0, 0, 0.05);
  box-shadow: 0 -250px 100px -120px #ccc inset;
  animation: ${(props) => `${props.theme.animations.background} 3s infinite alternate`};
`;

const SceletonContainer: React.FC<ISeletonContainerProps> = (props) => {
  return <StyledSceletonContainer {...props}>{props.children}</StyledSceletonContainer>;
};

export default SceletonContainer;
