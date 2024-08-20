import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Users from './Components/Users.jsx'
import Update from './Components/Update.jsx'
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:'/users',
    element:<Users/>,
    loader:()=>fetch('http://localhost:8080/users')


  },
  {
    path:'/update/:id',
    element:<Update/>,
    loader:({params})=>fetch(`http://localhost:8080/users/${params.id}`)
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>
)
