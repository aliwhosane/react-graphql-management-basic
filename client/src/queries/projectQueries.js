import { gql } from "@apollo/client";

const GET_PROJECTS = gql`
  query getProjects {
    projects {
      name
      id
      status
      client {
        name
      }
    }
  }
`;

export { GET_PROJECTS };
