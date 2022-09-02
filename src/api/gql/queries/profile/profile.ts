import { gql } from '@apollo/client';

export const GET_USER_PROFILE_INFO = gql`
  query user($login: String!) {
    user(login: $login) {
      login
      avatarUrl
      bio
      followers {
        totalCount
      }
      repositories(first: 10) {
        totalCount
        edges {
          node {
            createdAt
            issues(first: 3) {
              edges {
                node {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`;
