import { Link } from 'react-router-dom'

import './Nav.css'

const Nav = () => {
  return (
    <nav className='nav'>
      <Link
        className='link link-logo'
        to={'/'}
      >
        Home
      </Link>
    </nav>
  )
}

export default Nav
