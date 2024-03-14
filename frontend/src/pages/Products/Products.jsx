import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

import './Products.css'

const Products = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate();

  const deleteProduct = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/products/${id}`, {
        method: 'DELETE',
      })
      setData(data.filter((item) => item._id !== id))
    } catch (error) {
      console.error(error)
    }
  }
  
  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch('http://localhost:3000/api/products')
      ).json()

      setData(data)
    }

    dataFetch()
  }, [])
  return (
    <>
      <div className='products'>
        <h1>Products</h1>
        <ul>
          {data.map((product) => (
            <li key={product._id}>
              <img src={product.image} alt={product.name} />
              <div><span>name:</span>{product.name}</div>
              <div><span>quantity:</span>{product.quantity}</div>
              <div><span>price:</span>{product.price}$</div>
              <div className='btn-container'>
                <button onClick={() => navigate(`/product-edit/${product._id}`)}>🖊️</button>
                <button onClick={()=>deleteProduct(product._id)}>🗑️</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Products