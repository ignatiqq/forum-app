import { gql } from '@apollo/client';

import { FRAGMENT_GITHUB_API_PAGEINFO } from '@api/gql/queries/fragments';

export const GET_USER_REPOSITORIES = gql`
  ${FRAGMENT_GITHUB_API_PAGEINFO}
  query getUserRepositories($login: String!, $after: String) {
    user(login: $login) {
      repositories(first: 10, after: $after, orderBy: { field: UPDATED_AT, direction: DESC }) {
        totalCount
        edges {
          node {
            createdAt
            description
            forkCount
            id
            issues(last: 1) {
              totalCount
            }
            name
          }
        }
        pageInfo {
          ...GithubApiPageInfo
        }
      }
    }
  }
`;
