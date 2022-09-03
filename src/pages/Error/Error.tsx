import React from 'react';
import styled from "styled-components";

import { ErrorComponent } from '@molecules/index';

interface IErrorPageProps {
  status: number;
}

const StyledErrorPage = styled.div`
  
`;

const Error: React.FC<IErrorPageProps> = ({ status }) => {
  return (
    <StyledErrorPage>
      <ErrorComponent status={status} />
    </StyledErrorPage>
  );
};

export default Error;
