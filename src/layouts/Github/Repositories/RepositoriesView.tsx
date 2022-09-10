import React from 'react';

import RepositoriesLogic from '@layouts/Github/Repositories/RepositoriesLogic';
import { RepositoryPin } from '@organisms/Github/index';
import { IRepositoriesInfo } from '@api/gql/queries/repositories/types';
import { ErrorTitle, Loader, Button, Select } from '@atoms/index';
import { Flex, Wrapper } from '@shared/index';

export interface IRepositoresViewProps {
  data: IRepositoriesInfo | undefined;
  isLoading: boolean;
  error: string | undefined;
  loadMoreData: () => void;
  hasNextPage: boolean;
}

const Repositories: React.FC<IRepositoresViewProps> = ({
  data,
  isLoading,
  error,
  loadMoreData,
  hasNextPage
}) => {
  const toRender = (
    <>
      {error ? (
        <ErrorTitle>Error: {error}</ErrorTitle>
      ) : (
        data?.edges &&
        data.edges.map((item) => (
          <div style={{ margin: '15px 0px' }} key={item.node.id}>
            <RepositoryPin
              createdAt={item.node.createdAt}
              description={item.node.description}
              forkCount={item.node.forkCount}
              id={item.node.id}
              issuesCount={item.node.issues.totalCount}
              name={item.node.name}
            />
          </div>
        ))
      )}
    </>
  );

  return (
    <Wrapper>
      <>
        {toRender}
        {isLoading ? (
          <Loader />
        ) : (
          hasNextPage && (
            <Flex margin={'20px 0px'} justifyContent={'center'}>
              <Button onClick={loadMoreData}>More</Button>
            </Flex>
          )
        )}
      </>
    </Wrapper>
  );
};

export default RepositoriesLogic(Repositories);
