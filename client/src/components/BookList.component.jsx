import { useState } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries';
import { BookDetails } from './BookDetails.component';

const Books = ({ data: { books, loading } }) => {
  const [selectedBook, setSelectedBook] = useState('');

  const handleClick = (id) => {
    setSelectedBook(id);
  };

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul id="book-list">
          {books?.map(({ id, name }) => (
            <li key={id} onClick={() => handleClick(id)}>
              {name}
            </li>
          ))}
        </ul>
      )}
      {selectedBook ? (
        <BookDetails bookId={selectedBook} />
      ) : (
        <div>No Book Selected</div>
      )}
    </div>
  );
};

export const BookList = graphql(getBooksQuery)(Books);
