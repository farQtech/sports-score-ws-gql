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

type SportScoreInfo {
  id: ID!
  startTime: String!
  updatedAt: String!
  oldMarkets: [Markets]
  markets: [Markets]
  competitors: [Competitors!]!
  category: Category!
}

# root object
type NewScoreEvent {
  type: String!
  payload: SportScoreInfo!
}

  type Query {
    getAllMockSportScoreData: [NewScoreEvent!]!
    getMockSportScoreData(id: String): NewScoreEvent!
    healthCheck: String!
  }

  type Subscription {
    sportScoreDataUpdated: NewScoreEvent!
  }
`;


export default Schema; 