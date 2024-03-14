import { Form } from '../../components/Form/Form'
import './AddProduct.css'
const AddProduct = () => {
  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3000/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const createdItem = await response.json()
      console.log(createdItem)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className='add'>
      <h1>Add Product</h1>
      <Form onSubmit={onSubmit} />
    </div>
  )
}

export default AddProduct
