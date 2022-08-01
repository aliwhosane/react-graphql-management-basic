import Header from "./component/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Client from "./component/Client";
import AddClientModal from "./component/AddClientModal";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <div className="flex flex-col">
          <Header />
          <Client />
          <AddClientModal />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
