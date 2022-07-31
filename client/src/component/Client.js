import { gql, useQuery } from "@apollo/client";
import ClientRow from "./ClientRow";
import { GET_CLIENT } from "../queries/clientQueries";
import Spinner from "./Spinner";

const Client = () => {
  const { loading, error, data } = useQuery(GET_CLIENT);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : error ? (
        <p> Something went wrong! </p>
      ) : (
        <table className=" table-fixed">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Client;
