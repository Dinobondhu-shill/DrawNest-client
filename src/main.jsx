import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Root from './Root.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import HomePage from './pages/HomePage.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import { HelmetProvider } from 'react-helmet-async'
import FirebaseProvider from './firebase/FirebaseProvider.jsx'
import PrivateRoute from './pages/PrivateRoute.jsx'
import AddArtAndCraft from './pages/AddArtAndCraft.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<HomePage></HomePage>
      },
    {
      path:"/login",
      element:<Login></Login>
    }, 
    {
      path:"/register",
      element:<Register></Register>
    },
    {
      path:"/add-item",
      element: <PrivateRoute>
      <AddArtAndCraft></AddArtAndCraft>
      </PrivateRoute>
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

   <HelmetProvider>
   <FirebaseProvider>
   <RouterProvider router={router} />
   </FirebaseProvider>
   </HelmetProvider>
  </React.StrictMode>
)
