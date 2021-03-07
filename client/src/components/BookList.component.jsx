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

const Books = (props) => {
  const {
    data: { books },
  } = props;
  return (
    <div>
      <ul id="book-list">
        {books?.map((book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </div>
  );
};

export const BookList = graphql(getBooksQuery)(Books);
