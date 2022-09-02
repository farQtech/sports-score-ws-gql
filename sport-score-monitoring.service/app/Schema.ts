import { gql } from "apollo-server-express"; //will create a schema

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
  name: String
  score: Int
  translations: [String]
}

type Category {
  id: ID!
  slug: String
  translations: [String]
}

type Payload {
  id: ID!
  startTime: String
  updatedAt: String
  oldMarkets: [Markets]
  markets: [Markets]
  competitors: [Competitors]
  category: Category
}

type SportScoreData {
  type: String
  payload: Payload
}

  type Query {
    getAllSportsData: [SportScoreData]
    getSportData(id: String): SportScoreData
    payload: Payload
    category: Category
    competitors: Competitors
    markets: Markets
    selections: Selections
  }
`;


export default Schema; 