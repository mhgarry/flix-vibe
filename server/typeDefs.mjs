export const typeDefs = `#grapql
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    createdAt: String!
  }
  type Query {
    user(id: ID!): User
    users: [User]
  }
  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
  }`;
