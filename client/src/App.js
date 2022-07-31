import Header from "./component/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Client from "./component/Client";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <div className="flex flex-col">
          <Header />
          <Client />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
