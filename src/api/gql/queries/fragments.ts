import { gql } from '@apollo/client';

export const FRAGMENT_GITHUB_API_PAGEINFO = gql`
  fragment GithubApiPageInfo on PageInfo {
    endCursor
    hasNextPage
    startCursor
    hasPreviousPage
  }
`;
