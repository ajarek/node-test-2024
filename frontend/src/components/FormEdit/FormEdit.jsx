

import './FormEdit.css'

// eslint-disable-next-line react/prop-types
export const FormEdit = ({ onSubmit, nameProduct, quantityProduct, priceProduct, imageProduct }) => {
  

  
  
  return (
    <form
      className='form-register'
      onSubmit={onSubmit}
    >
      <div className='wrapper-input'>
        <label htmlFor='name'>Name Product</label>
        <input
          type='text'
          placeholder='Iphone 14'
          defaultValue={nameProduct}
          required
        />
       
      </div>

      <div className='wrapper-input'>
        <label htmlFor='quantity'>Quantity </label>
        <input
          type='number'
          placeholder='128'
          defaultValue={quantityProduct}
          required
        />
        
      </div>
      <div className='wrapper-input'>
        <label htmlFor='price'>Price</label>
        <input
          type='number'
          placeholder='48'
          defaultValue={priceProduct}
          required
        />
        
      </div>
      <div className='wrapper-input'>
        <label htmlFor='image'>Image</label>
        <input
          type='text'
          placeholder='https://storePhone-14.png'
          defaultValue={imageProduct} 
          required
        />
        
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