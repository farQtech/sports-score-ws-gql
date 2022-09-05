import { makeExecutableSchema } from "@graphql-tools/schema";
import { gql } from "@apollo/client/core";

import { startApolloServer } from "../app/helpers/init-helpers";
import SportScoreResolvers from "../app/resolvers/SportsScoreResolver";
import Schema from "../app/Schema";

const schema = makeExecutableSchema({ typeDefs: Schema, resolvers: SportScoreResolvers });

it("runs getAllMockSportScoreData query on schema", async () => {
  const server = await startApolloServer(schema, 8010);
  const result: any = await (server).executeOperation({
    query: gql` query {
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
        }`
  });
  const queryResultArray = result.data.getAllMockSportScoreData;
  const queryResult = queryResultArray[0];
  expect(queryResultArray).toBeTruthy();
  expect(queryResultArray.length).toBeGreaterThanOrEqual(1);
  expect(queryResult).toHaveProperty('category');
  expect(queryResult).toHaveProperty('competitors');
  expect(queryResult).toHaveProperty('markets');
  // expect(queryResult).toHaveProperty('oldMarkets');
  expect(queryResult.category).toHaveProperty('id');
  expect(queryResult.category).toHaveProperty('slug');


  expect(queryResult.competitors.length).toBeGreaterThanOrEqual(1);
  const competitor = queryResult.competitors[0];

  expect(competitor).toHaveProperty('id');
  expect(competitor).toHaveProperty('name');
  expect(competitor).toHaveProperty('score');

  expect(queryResult).toHaveProperty('startTime');
  expect(queryResult).toHaveProperty('updatedAt');

  // stop server
  server.stop();
});