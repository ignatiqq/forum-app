import { gql } from '@apollo/client';

export const GET_USER_REPOSIITORIES = gql`
  query getUserRepositories($login: String!, $after: String) {
    user(login: $login) {
      repositories(first: 10, after: $after) {
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
          endCursor
            hasNextPage
        }
      }
    }
  }
`;
