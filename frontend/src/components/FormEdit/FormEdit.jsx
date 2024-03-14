import './FormEdit.css'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import './FormEdit.css'
import { useEffect } from 'react'
// eslint-disable-next-line react/prop-types
export const FormEdit = ({ onSubmit, nameProduct, quantityProduct, priceProduct, imageProduct }) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    quantity: yup.number().required(),
    price: yup.number().required(),
    image: yup.string().required(),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        name: '',
        quantity: '',
        price: '',
        image: '',
      })
    }
  }, [formState, reset])

  return (
    <form
      className='form-register'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='wrapper-input'>
        <label htmlFor='name'>Name Product</label>
        <input
          type='text'
          placeholder='Iphone 14'
          defaultValue={nameProduct}
          {...register('name')}
        />
        <p>{errors?.name?.message}</p>
      </div>

      <div className='wrapper-input'>
        <label htmlFor='quantity'>Quantity </label>
        <input
          type='number'
          placeholder='128'
          defaultValue={quantityProduct}
          {...register('quantity')}
        />
        <p>{errors.quantity?.message}</p>
      </div>
      <div className='wrapper-input'>
        <label htmlFor='price'>Price</label>
        <input
          type='number'
          placeholder='48'
          defaultValue={priceProduct}
          {...register('price')}
        />
        <p>{errors.price?.message}</p>
      </div>
      <div className='wrapper-input'>
        <label htmlFor='image'>Image</label>
        <input
          type='text'
          placeholder='https://storePhone-14.png'
          defaultValue={imageProduct} 
          {...register('image')}
        />
        <p>{errors.image?.message}</p>
      </div>

      <div className='wrapper-input'>
        <input
          type='submit'
          value='Update Product'
        />
      </div>
    </form>
  )
}