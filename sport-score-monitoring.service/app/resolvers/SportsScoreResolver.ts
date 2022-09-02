import Data from "./mock-data"; //get all of the available data from our database.

const SportScoreResolvers = {
  Query: {
    getAllSportsData: () => Data,
    getSportData: (_: any, args: any) => { 
      return Data.find((Data) => Data.payload.id === args.id);
    },
    payload: () => Data.map(d => d.payload),
    category: () => Data.map(d => d.payload.category),
    competitors: () => Data.map(d => d.payload.competitors),
    markets: () => Data.map(d => d.payload.markets),
    selections: () => Data.map(d => d.payload.markets.map(c => c.selections))
  },
};
export default SportScoreResolvers;