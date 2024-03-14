import './Edit.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const Edit = () => {
  let { id } = useParams()
  const [data, setData] = useState({})

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
      Edit {id} {data.name}
    </div>
  )
}
export default Edit
