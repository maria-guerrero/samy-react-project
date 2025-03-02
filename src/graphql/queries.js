import { gql } from '@apollo/client';

export const GET_IMAGES = gql`
  query getImages($first: Int, $after: String) {
    images(first: $first, after: $after) {
      edges {
        node {
          id
          title
          picture
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;
