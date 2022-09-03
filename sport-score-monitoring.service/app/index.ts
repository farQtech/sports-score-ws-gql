import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });

import { makeExecutableSchema } from '@graphql-tools/schema';

import { startApolloServer, listenOnWebSocket} from './helpers/init-helpers';
import Schema from "./Schema";
import SportScoreResolvers from "./resolvers/SportsScoreResolver";

const schema = makeExecutableSchema({ typeDefs: Schema, resolvers : SportScoreResolvers });
// listen for websocket data
listenOnWebSocket();

// start server
startApolloServer(schema);
