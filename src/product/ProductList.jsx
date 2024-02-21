import { useDispatch, useSelector } from 'react-redux';

const ProductList = () => {
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        {products?.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price} 
            - <button onClick={() => dispatch({ type: 'REMOVE_PRODUCT', payload: product.id })}>delete</button>
            - <button >edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;