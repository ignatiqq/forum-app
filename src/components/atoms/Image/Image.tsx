import React from 'react';
import styled from 'styled-components';

interface IImageProps {
  src: string;
  width: string;
  height: string;
  borderRadius: string;
}

const StyledImage = styled.image<IImageProps>`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  border: ${({borderRadius}) => borderRadius ? "1px solid" : "none"};
  border-radius: ${({borderRadius}) => borderRadius};
`;

const Image: React.FC<IImageProps> = (props) => {
  return (
    <>
      <StyledImage {...props}></StyledImage>
    </>
  );
};

export default Image;
