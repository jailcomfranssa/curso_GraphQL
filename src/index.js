import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User!
      users: [User!]!
    }

    type User {
      id: ID!
      userName: String!
    }
  `,
  resolvers: {
    Query: {
      user: () => {
        return {
          id: 'adse125',
          userName: 'Jailson França',
        };
      },
      users: () => {
        return [
          {
            id: '1',
            userName: 'Jailson França',
          },
          {
            id: '2',
            userName: 'Jailson França',
          },

          {
            id: '3',
            userName: 'Jailson França',
          },
        ];
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
