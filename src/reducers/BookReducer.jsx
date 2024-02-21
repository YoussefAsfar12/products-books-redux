const initialBooksState = {
    books: []
  };
  
  const bookReducer = (state = initialBooksState, action) => {
    switch (action.type) {
      case 'ADD_BOOK':
        return {
          ...state,
          books: [...state.books, { ...action.payload, id: state.books.length + 1 }]
        };
      case 'REMOVE_BOOK':
        return {
          ...state,
          books: state.books.filter(book => book.id !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default bookReducer;