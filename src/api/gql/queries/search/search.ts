import { gql } from '@apollo/client';

const FREGMENT_ON_ISSUE_SEARCH =

export const SEARCH_ON_GITHUB = gql`
    query getDataBySearch($search: String) {
        search(query: $search, type: ISSUE, first: 10) {
            edges: {
        node: {
    ... on Issue {
    id
    author {
    login
    }
    }
    }
    }
        }
    }
`;

{
    search(query: "Недочеты по. верстке V-01", type: ISSUE, first: 10) {
    edges {
        node {
        ... on Issue {
                id
                author {
                    login
                }
                closed
                createdAt
                publishedAt
                url
                bodyText
                comments(first: 10) {
                    edges {
                        node {
                            id
                            bodyText
                            author {
                                login
                            }
                        }
                    }
                }
            }
        }
    }
    pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
    }
}
}




{
    search(query: "react", type: ISSUE, first: 10) {
    pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
    }
    nodes {
    ... on Issue {
            id
            bodyText
            comments(first: 3) {
                nodes {
                    author {
                        login
                    }
                    bodyText
                    createdAt
                }
            }
        }
    }
}
}