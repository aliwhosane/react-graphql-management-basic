import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENT } from "../queries/clientQueries";

const ClientRow = ({ id, client }) => {
  const { name, email, phone } = client;

  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    // refetchQueries: [{ query: GET_CLIENT }],
    update(cache, { data: { deleteClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENT });
      cache.writeQuery({
        query: GET_CLIENT,
        data: {
          clients: clients.filter((client) => client.id !== deleteClient.id),
        },
      });
    },
  });
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
        <button onClick={deleteClient} className="font-extrabold text-red-600">
          DELETE
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
