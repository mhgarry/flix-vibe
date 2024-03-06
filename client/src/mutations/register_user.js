import { gql } from "@apollo/client";

const REGISTER_USER = gql`
  #graphql
  mutation RegisterUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    registerUser(username: $username, email: $email, password: $password) {
      token
      user {
        id
        username
        email
        createdAt
      }
    }
  }
`;

export default REGISTER_USER;
