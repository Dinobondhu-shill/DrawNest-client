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
import MyArtAndCraftList from './pages/MyArtAndCraftList.jsx'
import AllCraftSection from './pages/AllCraftSection.jsx'
import ItemDetails from './pages/ItemDetails.jsx'

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
    },
    {
      path:'/artCollection/email/:email',
      element:<MyArtAndCraftList></MyArtAndCraftList>, 
      loader: ({params}) =>fetch(`http://localhost:5000/artCollection/email/${params?.email}`)
    },
    
    {
      path:'/all-items',
      element:<AllCraftSection></AllCraftSection>,
    },
    {
      path:`/artCollection/:id`,
      element:<PrivateRoute>
        <ItemDetails></ItemDetails>
      </PrivateRoute>,
      loader: ({params}) => fetch(`http://localhost:5000/artCollection/${params.id}`)
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
