import { gql } from "@apollo/client";

const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
      name
    }
  }
`;

// const ADD_CLIENT = gql`
// mutation addProject(name: $name, description: $description, status: $status,  clientId: $clientId) {
//       name,
//       id
//     }
// `;

export { DELETE_CLIENT };
