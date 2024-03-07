// LOGIN_USER.gql
import { gql } from "@apollo/client";

const LOGIN_USER = gql`
  mutation LoginUser($login: String!, $password: String!) {
    loginUser(login: $login, password: $password) {
      token
      user {
        username
        id
        email
        createdAt
      }
    }
  }
`;

export default LOGIN_USER;
