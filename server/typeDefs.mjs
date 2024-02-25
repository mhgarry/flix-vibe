export const typeDefs = `#grapql
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    createdAt: String!
  }
  type Query {
    getUsers: [User]
  }`;
