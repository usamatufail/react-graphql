import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { AddBook, BookList } from './components';

const client = new ApolloClient({
  uri: 'http://localhost:5500/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Sam's Reading List</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
