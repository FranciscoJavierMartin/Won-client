import { gql } from '@apollo/client';

export const GET_GAMES_QUERY = gql`
  query GetGames($limit: Int!) {
    games(pagination: { limit: $limit }) {
      data {
        attributes {
          name
          slug
          cover {
            data {
              attributes {
                url
              }
            }
          }
          developers {
            data {
              attributes {
                name
              }
            }
          }
          price
        }
      }
    }
  }
`;

export const GET_GAME_BY_SLUG_QUERY = gql`
  query GetGameBySlug($slug: StringFilterInput) {
    games(filters: { slug: $slug }) {
      data {
        attributes {
          name
          short_description
          description
          price
          rating
          release_date
          gallery {
            data {
              attributes {
                url
                label: alternativeText
              }
            }
          }
          cover {
            data {
              attributes {
                src: url
              }
            }
          }
          developers {
            data {
              attributes {
                name
              }
            }
          }
          publisher {
            data {
              attributes {
                name
              }
            }
          }
          categories {
            data {
              attributes {
                name
              }
            }
          }
          platforms {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;
