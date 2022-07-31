import { gql } from "@apollo/client";

const GET_CLIENT = gql`
  query getClient {
    clients {
      id
      name
      email
      phone
    }
  }
`;

export { GET_CLIENT };
