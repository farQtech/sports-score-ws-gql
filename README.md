## Create client-server web application to showcase some *sportsevents*

[![Node.js CI](https://github.com/farQtech/sports-score-ws-gql/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/farQtech/sports-score-ws-gql/actions/workflows/node.js.yml)

### UI

 - UI fetches data from *graphql* server and subscribes for updates.
 - UI handles some edge cases.
 - It uses *Typescript* and *Apollo* client for queries and subscriptions.

### Server

 - Holds a schema to data fetch from *websocket* connection.
 - Provides a query to power the UI.
 - Provides a subscription end point to send updates to UI.
 - consumes data from a websocket endpoint.

### Data Base

 - Since this is a test application, **I have used a json file as a persistent store**, it can be imagined to behave very similar to a no-sql dataBase with minimal set of features. The said json file/db lives at project root/db/ location as shown below.

### Folder structure
As shown below, both UI and back end application live under same repo but do not share any file (e.g. package.json), so that it will be easier to dockize them.
```
Project
│   README.md
│   db
│    └─── db.json    
│
└───sport-score-monitoring.service
│   └─── __tests__
│   └─── app
│          └─── helpers
│          └─── resolvers
│          └─── services
│          └─── Schema.ts
│          └─── index.ts
└───sport-score-monitoring.web
    └─── src
          └───components
              └─── gql
```
#### How to run ?
Both UI and back end project contains run and build scripts in package.json folder.
	**To run server** in development mode use `start:dev`  and `build` to build project & use `test` command to run tests.
	**To run UI** in development mode use `start`  and `build` to build project.