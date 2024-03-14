import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddProduct from './pages/AddProduct/AddProduct'
import Main from './layouts/Main/Main'
import Products from './pages/Products/Products'
import Error from './pages/Error/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Products />,
        errorElement: <Error />,
      },
      {
        path: '/add',
        element: <AddProduct />,
        errorElement: <Error />,
      },
     
    ],
  },
])
function App() {
 
  return (
    <div className='App'>
      
        <RouterProvider router={router} />
      
    </div>
  )
}

export default App