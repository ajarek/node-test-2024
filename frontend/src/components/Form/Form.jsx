import './Form.css'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import './Form.css'
import { useEffect } from 'react'
export const Form = ({ onSubmit }) => {
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
          {...register('name')}
        />
        <p>{errors?.name?.message}</p>
      </div>

      <div className='wrapper-input'>
        <label htmlFor='quantity'>Quantity </label>
        <input
          type='number'
          placeholder='128'
          {...register('quantity')}
        />
        <p>{errors.quantity?.message}</p>
      </div>
      <div className='wrapper-input'>
        <label htmlFor='price'>Price</label>
        <input
          type='number'
          placeholder='48'
          {...register('price')}
        />
        <p>{errors.price?.message}</p>
      </div>
      <div className='wrapper-input'>
        <label htmlFor='image'>Image</label>
        <input
          type='text'
          placeholder='https://storePhone-14.png'
          {...register('image')}
        />
        <p>{errors.image?.message}</p>
      </div>

      <div className='wrapper-input'>
        <input
          type='submit'
          value='Add Product'
        />
      </div>
    </form>
  )
}