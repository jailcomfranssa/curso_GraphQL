import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from './grapgql/schema';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(4003).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
