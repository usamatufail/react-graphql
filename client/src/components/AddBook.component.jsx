import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const AddBookForm = () => {
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
          <option>Select author</option>
        </select>
      </div>

      <button type="submit">+</button>
    </form>
  );
};

export const AddBook = graphql(getAuthorsQuery)(AddBookForm);
