import { gql } from '@apollo/client';
import { GameFragment } from '../fragments/game';
import { HighlightFragment } from '../fragments/highlight';

export const GET_RECOMMENDED = gql`
  query GetRecommended {
    recommended {
      data {
        attributes {
          section {
            title
            highlight {
              ...HighlightFragment
            }
            games {
              data {
                attributes {
                  ...GameFragment
                }
              }
            }
          }
        }
      }
    }
  }

  ${GameFragment}
  ${HighlightFragment}
`;
