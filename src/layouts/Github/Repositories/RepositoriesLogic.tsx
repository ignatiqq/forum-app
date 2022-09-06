import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_USER_REPOSIITORIES } from "@api/gql/queries/repositories";
import { IRepositoriesByLoginResponse } from "@api/gql/queries/repositories/types";
import { useParams } from "react-router-dom";
import { IRepositoresViewProps } from "@layouts/Github/Repositories/RepositoriesView";

const RepositoriesLogic = (Component: React.FC<IRepositoresViewProps>) => () => {
  const { id } = useParams();

  const [getRepositoryByUserLogin, { data, error, loading, fetchMore, networkStatus }] =
    useLazyQuery<IRepositoriesByLoginResponse>(GET_USER_REPOSIITORIES, {
      variables: {
        after: null
      },
      notifyOnNetworkStatusChange: true
    });

  const loadMoreRepositoriesHandler = () => {
    const endCursor = data?.user.repositories.pageInfo.endCursor;

    fetchMore({
      variables: {
        login: id,
        after: endCursor
      },
      updateQuery: (prev, { fetchMoreResult }): IRepositoriesByLoginResponse => {
        console.log(fetchMoreResult, "fetch more result")
        const result =  {user: {
          ...prev.user,
            repositories: {
            ...prev.user.repositories,
              edges: [...prev.user.repositories.edges, ...fetchMoreResult.user.repositories.edges],
              pageInfo: {
                ...fetchMoreResult.user.repositories.pageInfo
              }
            },
        }}
        return result;
      }
    });
  };

  useEffect(() => {
    if (id && !data) {
      getRepositoryByUserLogin({
        variables: {
          login: id
        }
      });
    }
  }, [id]);

  return (
    <Component
      loadMoreData={loadMoreRepositoriesHandler}
      isLoading={loading}
      error={error?.message}
      hasNextPage={data?.user.repositories.pageInfo.hasNextPage || false}
      data={data?.user.repositories}
    />
  );
};

export default RepositoriesLogic;
