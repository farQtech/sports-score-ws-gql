import { gql } from '@apollo/client';

export const SCORE_UPDATED_SUBSCRIPTION = gql`
subscription {
  sportScoreDataUpdated {
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
        id,
        name,
        selections {
          id,
          name,
          odds
        }
      },
      startTime,
      updatedAt
    } 
  }
`;