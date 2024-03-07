import { gql } from "@apollo/client";

const LOGOUT_USER = gql`
  #graphql
  mutation LogoutUser($token: String!) {
    logoutUser(token: $token)
  }
`;

export default LOGOUT_USER;
