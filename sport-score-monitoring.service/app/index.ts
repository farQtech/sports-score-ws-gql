import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });
const FSDB = require("file-system-db");

import { makeExecutableSchema } from '@graphql-tools/schema';

import { startApolloServer, listenOnWebSocket} from './helpers/init-helpers';
import Schema from "./Schema";
import SportScoreResolvers from "./resolvers/SportsScoreResolver";

const schema = makeExecutableSchema({ typeDefs: Schema, resolvers : SportScoreResolvers });

const db = new FSDB("../db/db.json", false); 

// listen for websocket data
listenOnWebSocket(db);

// start server
startApolloServer(schema);
