import { gql } from '@apollo/client';

export const READ_SCORES_QUERY = gql`
 query {
  getAllMockSportScoreData {
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

