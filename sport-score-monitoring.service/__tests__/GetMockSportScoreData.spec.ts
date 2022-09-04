import { makeExecutableSchema } from "@graphql-tools/schema";
import { gql } from "@apollo/client/core";

import { startApolloServer } from "../app/helpers/init-helpers";
import SportScoreResolvers from "../app/resolvers/SportsScoreResolver";
import Schema from "../app/Schema";

const schema = makeExecutableSchema({ typeDefs: Schema, resolvers: SportScoreResolvers });

it("runs getMockSportScoreData query on schema", async () => {
    const server = await startApolloServer(schema, 5011);
    const result: any = await (server).executeOperation({
        query: gql`
        query{
            getMockSportScoreData(id: "13ebb254-7968-429e-afd1-ba0a73a6145a") {
                  payload {
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
        }`
    });

    const queryResult = result.data.getMockSportScoreData.payload;
    expect(queryResult).toBeTruthy();
    expect(queryResult).toHaveProperty('category');
    expect(queryResult).toHaveProperty('competitors');
    expect(queryResult).toHaveProperty('markets');
    expect(queryResult).toHaveProperty('oldMarkets');
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