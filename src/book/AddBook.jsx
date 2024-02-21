import  { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const dispatch = useDispatch();

  const handleAddBook = () => {
    dispatch({type: 'ADD_BOOK', payload: {title, author, isbn}});
    setTitle('');
    setAuthor('');
    setIsbn('');
  };

  return (
    <div>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="author">Author:</label>
        <input
          id="author"
          type="text"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="isbn">ISBN:</label>
        <input
          id="isbn"
          type="text"
          value={isbn}
          onChange={e => setIsbn(e.target.value)}
        />
      </div>
      <button onClick={handleAddBook}>Add Book</button>
    </div>
  );
};

export default AddBook;