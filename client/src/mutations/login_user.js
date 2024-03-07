// LOGIN_USER.gql
import { gql } from "@apollo/client";

const LOGIN_USER = gql`
  mutation LoginUser($login: String!, $password: String!) {
    loginUser(login: $login, password: $password) {
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

export default LOGIN_USER;
