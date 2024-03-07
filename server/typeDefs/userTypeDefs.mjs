// eslint-disable-next-line import/prefer-default-export
export const userTypeDefs = `
  #graphql
type Query {
  user(id: ID!): User
  users: [User]
}

type Mutation {
  registerUser(username: String!, email: String!, password: String!): AuthUser
  loginUser(login: String!, password: String!): AuthUser
  logoutUser(token: String!): Boolean
}

type User {
  id: ID!
  username: String!
  email: String!
  createdAt: String!
}

type AuthUser {
  token: String!
  user: User!
}
`;
