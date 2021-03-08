import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries';

const Book = ({ data: { book, loading } }) => {
  return (
    <div>
      {loading || !book ? (
        <h4>Loading Book...</h4>
      ) : (
        <div id="book-list">
          <h3>Name: {book.name}</h3>
          <h3>Genre: {book.genre}</h3>
          <h5>Author: {book.author.name}</h5>
          <h5>More Books By this Author:</h5>
          {book.author.books.map((book) => {
            return (
              <ul>
                <li>{book.name}</li>
              </ul>
            );
          })}
        </div>
      )}
    </div>
  );
};

export const BookDetails = graphql(getBookQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.bookId,
      },
    };
  },
})(Book);
