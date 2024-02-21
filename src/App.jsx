
import './App.css';
import AddBook from './book/AddBook';
import BookList from './book/BookList';
import AddProduct from './product/AddProduct';
import ProductList from './product/ProductList';
import './style.css';
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="section">
          <h2>Add Product</h2>
          <AddProduct />
        </div>
        <div className="section">
          <h2>Product List</h2>
          <ProductList />
        </div>
      </div>
      <div className="container">
        <div className="section">
          <h2>Add Book</h2>
          <AddBook />
        </div>
        <div className="section">
          <h2>Book List</h2>
          <BookList />
        </div>
      </div>
    </div>
  );
}

export default App;
