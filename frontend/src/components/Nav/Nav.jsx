import { Link } from 'react-router-dom'

import './Nav.css'

const Nav = () => {
  return (
    <nav className='nav'>
      <Link
        className='link '
        to={'/'}
      >
        <h1>Products</h1>
      </Link>
      <Link
        className='link '
        to={'/add'}
      >
        <h1>Add Product</h1>
      </Link>
    </nav>
  )
}

export default Nav
