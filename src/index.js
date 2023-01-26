import { ApolloServer } from 'apollo-server';
import fetch from 'node-fetch';
import { resolvers, typeDefs } from './grapgql/schema';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return {
      fetch,
    };
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
