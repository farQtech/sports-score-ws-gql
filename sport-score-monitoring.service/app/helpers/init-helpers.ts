import http from "http";
import express from "express";


import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { PubSub } from 'graphql-subscriptions';
import { useServer } from 'graphql-ws/lib/use/ws';

import { WebSocketServer } from 'ws';

import  WsDataService from "../services/wsDataSservice";

const fs = require('fs');


const pubsub = new PubSub();



/**
 * initializes a webSocket client and listens for incoming messages.
 */
 export function listenOnWebSocket() {
    // open client connection
    const wsDataService = new WsDataService();
    const NEW_DATA = 'NEW_DATA';
    wsDataService.openConnection();
    // fs.writeFile('../zoo.json', '', function () { console.log('done') });
  
    wsDataService.onMessage((data) => {
      try {
        // if (data.type == "event-update") {
        if(data.type){
        console.log(data.type)
        pubsub.publish(NEW_DATA, {
          sportScoreDataUpdated: data
        });
      }
        // }
        // STORE recovery data into some persistant storage. e.g. file// db will be easier though
        //  else if (data.type = "event-data") {
        //   // fs.appendFile("../db/zoo.json", data);
        // }
      } catch (ex: any) {
        // log error
        wsDataService.closeConnection();
      }
    });
}
  
  
  /**
   * creates and starts an instance of server
   * @param schema instance of `GraphQLSchema` class
   */
 export async function startApolloServer(schema: any) {
    const app = express();
    const httpServer = http.createServer(app);
  
    const server = new ApolloServer({
      schema,
      csrfPrevention: true,
      cache: "bounded",
      context: ({req, res}) => ({req, res, pubsub}),
  
      //attach GraphQL functionality to the server
      plugins: [
         // Proper shutdown for the HTTP server.
         ApolloServerPluginDrainHttpServer({ httpServer }),
  
        // Proper shutdown for the WebSocket server.
        {
          async serverWillStart() {
            return {
              async drainServer() {
                await serverCleanup.dispose();
              },
            };
          },
        },
        ApolloServerPluginLandingPageLocalDefault({ embed: true }),
      ],
    });
  
    // Creating the WebSocket server
    const wsServer = new WebSocketServer({
      server: httpServer,
      path: '/graphql'
    });
  
    const serverCleanup = useServer({
      schema,
      context:  (req, res) => ({req, res, pubsub})
      }, wsServer);
  
    await server.start();
    server.applyMiddleware({ app });
  
    await new Promise<void>((resolve) =>
      httpServer.listen({ port: 4000 }, resolve)
    );
  
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
  }
