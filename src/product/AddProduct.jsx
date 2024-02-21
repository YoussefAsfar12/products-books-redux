import  { useState } from 'react'
import { useDispatch } from 'react-redux';

const AddProduct = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const dispatch = useDispatch();


    const handleAddProduct = () => {
        const action = {
            type: 'ADD_PRODUCT',
            payload: {
                name: productName,
                price: productPrice
            }
        }
        dispatch(action);
        setProductName('');
        setProductPrice('');

    }


  return (
    <>
    <div>
      <div>
        <label htmlFor="productName">Name:</label>
        <input
          id="productName"
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="productPrice">Price:</label>
        <input
          id="productPrice"
          type="number"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
      </div>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
    </>
  )
}

export default AddProduct