import { gql } from '@apollo/client';

export const LIKE_IMAGE = gql`
  mutation likeImage($imageId: ID!) {
    likeImage(imageId: $imageId) {
      id
      title
      likes
    }
  }
`;

export const UNLIKE_IMAGE = gql`
  mutation unlikeImage($imageId: ID!) {
    unlikeImage(imageId: $imageId) {
      id
      title
      likes
    }
  }
`;