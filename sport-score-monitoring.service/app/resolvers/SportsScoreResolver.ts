import * as jsonData from "../../../db/recovery-snapshot.json";
// TODO:: USE DB instead
import Data from "../../../db/mock-data";

const NEW_DATA = 'NEW_DATA';

const SportScoreResolvers = {
  Subscription: {
    sportScoreDataUpdated: {
      subscribe: (parent: any, args: any, { pubsub }: any) =>  pubsub.asyncIterator(NEW_DATA)
    }
  },
  Query: {
    getAllMockSportScoreData: (parent: any, args: any, { pubsub }: any) => {
      return Data;
    },
    getMockSportScoreData: (_: any, args: any) => { 
      return Data.find((Data) => Data.payload.id === args.id);
    },
  },
};
export default SportScoreResolvers;