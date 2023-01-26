import { gql } from 'apollo-server-core';

export const postTypeDefs = gql`
  extend type Query {
    post: Post!
    posts: [Post!]!
  }

  type Post {
    id: ID!
    titulo: String!
    body: String!
    #user: User!
    indexRef: Int!
    createdAt: String!
  }
`;
