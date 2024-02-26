import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  #graphql
  mutation LoginUser($username: String!, $password: String!, $email: String!) {
    loginUser(username: $username, password: $password, email: $email) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;
