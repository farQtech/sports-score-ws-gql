import { gql } from '@apollo/client';

export const QUERY_LAUNCH_LIST = gql`
  query getAllSportsData{
     payload {
       category {
         slug
       },
       competitors {
         name,
        score
       },
       oldMarkets {
         name         
       }
     }
  }
`;