import { gql } from 'apollo-boost';

export const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;



export const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
    }
  }
`

export const getBookQuery = gql`
  query($id: ID!) {
    book(id: $id) {
      name
      genre
      author {
        name
        books {
          name
        }
      }
    }
  }
`