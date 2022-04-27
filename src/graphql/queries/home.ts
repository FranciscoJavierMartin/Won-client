import { gql } from '@apollo/client';
import { BannerFragment } from '@/graphql/fragments/banner';
import { GameFragment } from '../fragments/game';
import { HighlightFragment } from '../fragments/highlight';

export const QUERY_HOME = gql`
  query QueryHome {
    banners(pagination: { limit: 4 }) {
      data {
        attributes {
          ...BannerFragment
        }
      }
    }

    newGames: games(
      filters: { release_date: { lte: "2021-01-28" } }
      sort: "release_date:desc"
      pagination: { limit: 8 }
    ) {
      data {
        attributes {
          ...GameFragment
        }
      }
    }

    upcomingGames: games(
      filters: { release_date: { lte: "2021-01-28" } }
      sort: "release_date:asc"
      pagination: { limit: 8 }
    ) {
      data {
        attributes {
          ...GameFragment
        }
      }
    }

    freeGames: games(
      filters: { price: { eq: 0 } }
      sort: "release_date:desc"
      pagination: { limit: 8 }
    ) {
      data {
        attributes {
          ...GameFragment
        }
      }
    }

    sections: home {
      data {
        attributes {
          newGames {
            title
            highlight {
              ...HighlightFragment
            }
          }

          popularGames {
            title
            highlight {
              ...HighlightFragment
            }
            games(pagination: { limit: 8 }) {
              data {
                attributes {
                  ...GameFragment
                }
              }
            }
          }

          upcomingGames {
            title
            highlight {
              ...HighlightFragment
            }
          }

          freeGames {
            title
            highlight {
              ...HighlightFragment
            }
          }
        }
      }
    }
  }

  ${BannerFragment}
  ${GameFragment}
  ${HighlightFragment}
`;
