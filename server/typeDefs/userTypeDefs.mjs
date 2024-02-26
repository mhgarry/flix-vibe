export const userTypeDefs = `
  #graphql
  type Query {
    user(id: ID!): User
    users: [User]
  }
  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    loginUser(username: String!, password: String!): AuthUser
  }
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    createdAt: String!
  }
  type AuthUser {
    token: String!
    user: User!
  }
`;
