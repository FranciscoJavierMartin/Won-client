import { gql } from '@apollo/client';

export const QUERY_HOME = gql`
  query QueryHome {
    banners(pagination: { limit: 4 }) {
      data {
        attributes {
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
      }
    }
  }
`;
