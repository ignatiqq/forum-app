import React from 'react';
import { Flex, Text, Wrapper } from '@shared/index';

interface IRepositoryStatistic {
  createdAt: string;
  forkCount: number;
  issuesCount: number;
}

const RepositoryStatistic: React.FC<IRepositoryStatistic> = ({
  createdAt,
  forkCount,
  issuesCount
}) => {
  return (
    <Flex alignItems={'center'} justifyContent={'space-between'}>
      <div>
        <span>Created at: {createdAt}</span>
      </div>
      <Flex>
        <Flex margin={'0px 20px'}>
          <Text fontWeight={'500'}>Forks:</Text>
          <Text margin={'0px 0px 0px 10px'}>{forkCount}</Text>
        </Flex>
        <Flex>
          <Text fontWeight={'500'}>Issues:</Text>
          <Text margin={'0px 0px 0px 10px'}>{issuesCount}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default RepositoryStatistic;
