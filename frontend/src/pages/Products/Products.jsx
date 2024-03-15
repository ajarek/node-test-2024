import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './Products.css'

const Products = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()

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
        <table>
          <thead>
            <tr>
              <th >Image</th>
              <th >Name</th>
              <th >Quantity</th>
              <th >Price</th>
              <th >Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) => (
              <tr key={product._id}>
                <td>
                  <img
                    src={product.image}
                    alt={product.name}
                    width={80}
                  />
                </td>
                <td>
                  
                  {product.name}
                </td>
                <td>
                  
                  {product.quantity}
                </td>
                <td>
                  
                  {product.price}$
                </td>
                <td className='btn-container'>
                  <button
                    onClick={() => navigate(`/product-edit/${product._id}`)}
                  >
                    🖊️
                  </button>
                  <button onClick={() => deleteProduct(product._id)}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Products
