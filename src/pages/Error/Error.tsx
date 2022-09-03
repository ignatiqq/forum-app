import React from 'react';
import styled from "styled-components";

import { ErrorComponent } from '@molecules/index';
import { Flex } from "@shared/index";

interface IErrorPageProps {
  status: number;
}

const StyledErrorPage = styled.div`
  height: 90vh;
`;

const StyledHeight = styled.div`
  height: 100%;
`;

const Error: React.FC<IErrorPageProps> = ({ status }) => {
  return (
    <StyledErrorPage>
      <Flex justifyContent={"center"} alignItems={"center"} customHeight={"100%"}>
        <ErrorComponent status={status} />
      </Flex>
    </StyledErrorPage>
  );
};

export default Error;
