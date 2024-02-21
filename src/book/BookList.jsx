import { useDispatch, useSelector } from 'react-redux';

const BookList = () => {
  const books = useSelector(state => state.books.books);
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>Title:</strong> {book.title}, <strong>Author:</strong> {book.author}, <strong>ISBN:</strong> {book.isbn}
            <button onClick={() => dispatch({ type: 'REMOVE_BOOK', payload: book.id })}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;