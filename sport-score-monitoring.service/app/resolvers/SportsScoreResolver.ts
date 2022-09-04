import * as mock_source  from '../../../db/db.json';

const NEW_DATA = 'NEW_DATA';

const _source: {data: any[]} = (mock_source as  {data: any[]});

const SportScoreResolvers = {
  Subscription: {
    sportScoreDataUpdated: {
      subscribe: (parent: any, args: any, { pubsub }: any) => pubsub.asyncIterator(NEW_DATA)
    }
  },
  Query: {
    getAllMockSportScoreData: () => _source.data,
    getMockSportScoreData: (_: any, args: any) => _source.data.find((d: any) => d.payload.id === args.id),
    healthCheck: () => `I'm fine, thanks for asking ${{date: new Date().toISOString()}}`
  },
};
export default SportScoreResolvers;