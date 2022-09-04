import { gql } from "apollo-server-express";

// type defs for the application

const Schema = gql`
  type Selections {
  id: ID!
  name: String
  odds: Float
}

type Markets {
  id: ID!
  name: String
  translations: [String]
  selections: [Selections]
}

type Competitors {
  id: ID!
  name: String!
  score: Int!
  translations: [String]
}

type Category {
  id: ID!
  slug: String!
  translations: [String]
}

# root object
type SportScoreInfo {
  id: ID!
  startTime: String!
  updatedAt: String!
  oldMarkets: [Markets]
  markets: [Markets]
  competitors: [Competitors!]!
  category: Category!
}

  type Query {
    getAllMockSportScoreData: [SportScoreInfo!]!
    getMockSportScoreData(id: String): SportScoreInfo!
    healthCheck: String!
  }

  type Subscription {
    sportScoreDataUpdated: SportScoreInfo!
  }
`;


export default Schema; 