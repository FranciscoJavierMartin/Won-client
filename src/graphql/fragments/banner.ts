import { gql } from '@apollo/client';

export const BannerFragment = gql`
  fragment BannerFragment on Banner {
    image {
      data {
        attributes {
          url
        }
      }
    }
    title
    subtitle
    button {
      link
      label
    }
    ribbon {
      text
      color
      size
    }
  }
`;
