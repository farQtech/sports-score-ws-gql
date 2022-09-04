import { gql } from '@apollo/client';

export const READ_SCORES_QUERY = gql`
 query {
  getAllMockSportScoreData {
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

