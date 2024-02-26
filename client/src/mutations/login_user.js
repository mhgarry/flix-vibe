import { gql } from "@apollo/client";

const LOGIN_USER = gql`
  #graphql
  mutation LoginUser($login: String!, $password: String!) {
    loginUser(login: $login, password: $password) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;

export default LOGIN_USER;
