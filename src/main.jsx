import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { combineReducers, legacy_createStore } from 'redux'
import { Provider } from 'react-redux'
import productReducer from  './reducers/ProductReducer.jsx'
import bookReducer from './reducers/BookReducer.jsx'

const rootReducer = combineReducers({
  products: productReducer,
  books: bookReducer
})

const store = legacy_createStore(rootReducer)

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
  <App />

</Provider>
  
)
