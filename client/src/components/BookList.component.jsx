import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const Books = ({ data: { books, loading } }) => {
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul id="book-list">
          {books?.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const BookList = graphql(getBooksQuery)(Books);
