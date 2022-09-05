import { makeExecutableSchema } from "@graphql-tools/schema";
import { gql } from "@apollo/client/core";

import { startApolloServer } from "../app/helpers/init-helpers";
import SportScoreResolvers from "../app/resolvers/SportsScoreResolver";
import Schema from "../app/Schema";

const schema = makeExecutableSchema({ typeDefs: Schema, resolvers : SportScoreResolvers });

it("runs health check test on gql schema", async () => {
    const server = await startApolloServer(schema, 5013);
    const result: any = await (server).executeOperation({
        query: gql`
        query{
            healthCheck
        }`
    });

    expect(result).toBeTruthy();
    expect(result.data.healthCheck).toContain('fine');

    server.stop();

});

afterAll(done => done());