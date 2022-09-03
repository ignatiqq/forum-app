import React from 'react';
import styled from "styled-components";

import { Text, Wrapper } from "@shared/index";
import Heading from '@shared/Title/Title';
import { RepositoryStatistic } from "@molecules/Github";
import { NavigationLink } from "@atoms/index";

interface IRepositoryPinProps {
  createdAt: string;
  description: string;
  forkCount: number;
  id: string;
  issuesCount: number;
  name: string;
}

const OverflowedText = styled(Text)`
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
`;

const RepositoryPin: React.FC<IRepositoryPinProps> = ({
  createdAt,
  description,
  forkCount,
  issuesCount,
  name
}) => {
  return (
    <NavigationLink to={`/repository/${name}`}>
      <Wrapper border={'1px solid #000'} minWidth={'200px'} padding={'15px'}>
        <Heading level={3}>{name}</Heading>
        <Text maxWidth={"80%"} margin={"20px 0px"}>
          <OverflowedText>
            {description}
          </OverflowedText>
        </Text>
        <RepositoryStatistic
          createdAt={createdAt}
          forkCount={forkCount}
          issuesCount={issuesCount}
        />
      </Wrapper>
    </NavigationLink>
  );
};

export default RepositoryPin;
