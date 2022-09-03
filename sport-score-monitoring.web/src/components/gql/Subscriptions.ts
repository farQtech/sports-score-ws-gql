import { gql } from '@apollo/client';

export const SCORE_UPDATED_SUBSCRIPTION = gql`
subscription {
  sportScoreDataUpdated {
    payload {
        category {
          id,
          slug
        },
        category {
          id,
          slug
        },
        competitors {
          id, 
          name,
          score
        },
        markets {
          name,
          selections {
            name,
            odds
          }
        },
        oldMarkets {
          name,
          selections {
            name,
            odds
          }
        }
        startTime,
        updatedAt
      }
    } 
  }
`;