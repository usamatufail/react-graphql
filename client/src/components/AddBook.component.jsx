import { useState } from 'react';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { getAuthorsQuery, getBooksQuery, addBookMutation } from '../queries';

const AddBookForm = ({
  addBookMutation,
  getAuthorsQuery: { loading, authors },
}) => {
  const [variables, setData] = useState({
    name: '',
    genre: '',
    authorId: '',
  });

  const handleChange = (e) => {
    setData({ ...variables, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addBookMutation({
      variables: {
        name: variables.name,
        genre: variables.genre,
        authorId: variables.authorId,
      },
      refetchQueries: [{ query: getBooksQuery }],
    });
  };

  return (
    <form id="add-book" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Book Name:</label>
        <input type="text" name="name" id="name" onChange={handleChange} />
      </div>

      <div className="field">
        <label htmlFor="genre">Genre:</label>
        <input type="text" name="genre" id="genre" onChange={handleChange} />
      </div>

      <div className="field">
        <label htmlFor="authorId">Author:</label>
        <select id="authorId" name="authorId" onChange={handleChange}>
          {loading ? (
            <option>Loading authors...</option>
          ) : (
            authors?.map(({ id, name }) => {
              return (
                <option key={id} value={id}>
                  {name}
                </option>
              );
            })
          )}
        </select>
      </div>

      <button type="submit">+</button>
    </form>
  );
};

export const AddBook = compose(
  graphql(getAuthorsQuery, { name: 'getAuthorsQuery' }),
  graphql(addBookMutation, { name: 'addBookMutation' })
)(AddBookForm);
