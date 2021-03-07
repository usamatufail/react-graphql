import { graphql } from 'react-apollo';
import { getAuthorsQuery } from '../queries';

const AddBookForm = ({ data: { authors, loading } }) => {
  console.log(authors);
  return (
    <form id="add-book">
      <div className="field">
        <label htmlFor="name">Book Name:</label>
        <input type="text" name="name" id="name" />
      </div>

      <div className="field">
        <label htmlFor="genre">Genre:</label>
        <input type="text" name="genre" id="genre" />
      </div>

      <div className="field">
        <label htmlFor="author">Author:</label>
        <select id="author" name="genre">
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

export const AddBook = graphql(getAuthorsQuery)(AddBookForm);
