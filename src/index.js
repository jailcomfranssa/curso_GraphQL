import { ApolloServer } from 'apollo-server';
import { context } from './grapgql/context';
import { resolvers, typeDefs } from './grapgql/schema';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

server.listen(4003).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
