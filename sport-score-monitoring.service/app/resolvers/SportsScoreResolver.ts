const fs = require('fs');
const FSDB = require("file-system-db");

import * as mock_source  from '../../../db/db.json';
import WsDataService from '../services/wsDataSservice';


const NEW_DATA = process.env.NEW_DATA;

const _source: {data: any[]} = (mock_source as  {data: any[]});

const wsDataService = new WsDataService();

const SportScoreResolvers = {
  Subscription: {
    sportScoreDataUpdated: {
      subscribe: (parent: any, args: any, { pubsub }: any) => {
        // trigger recovery event, once client starts listening
        wsDataService.sendRecovery();
        return pubsub.asyncIterator(NEW_DATA);
      }
    }
  },
  Query: {
    getAllMockSportScoreData: () => _source.data.map(_ => _.payload),
    getMockSportScoreData: (_: any, args: any) =>_source.data.find((d: any) => d.payload.id === args.id).payload,
    healthCheck: () => `I'm fine, thanks for asking ${{date: new Date().toISOString()}}`
  },
};
export default SportScoreResolvers;