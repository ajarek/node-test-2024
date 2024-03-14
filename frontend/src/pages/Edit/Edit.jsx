import './Edit.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {FormEdit} from '../../components/FormEdit/FormEdit'
const Edit = () => {
  let { id } = useParams()
  const [data, setData] = useState({})
  const onSubmit = async (data) => {
    try {
      const response = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const updatedData = await response.json();
      console.log(updatedData);
    } catch (error) {
      console.error(error);
    } 
  }
  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(`http://localhost:3000/api/products/${id}`)
      ).json()
      setData(data)
    }
    dataFetch()
  }, [id])
  return (
    <div className='edit'>
      <FormEdit onSubmit={onSubmit} nameProduct={data.name} quantityProduct={data.quantity} priceProduct={data.price} imageProduct={data.image} />
    </div>
  )
}
export default Edit
