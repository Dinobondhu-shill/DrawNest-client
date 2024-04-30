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
import UpdatePage from './pages/UpdatePage.jsx'
import CategoryCard from './components/CategoryCard.jsx'
import CategoryDetailsSection from './pages/CategoryDetailsSection.jsx'

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
      element:<PrivateRoute>
        <MyArtAndCraftList></MyArtAndCraftList>
      </PrivateRoute>, 
      loader: ({params}) =>fetch(`https://drawnest-sever.vercel.app/artCollection/email/${params?.email}`)
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
      loader: ({params}) => fetch(`https://drawnest-sever.vercel.app/artCollection/${params.id}`)
    },
    {
      path:'/update/:id',
      element:<PrivateRoute>
        <UpdatePage></UpdatePage>
      </PrivateRoute>,
      loader: ({params}) => fetch(`https://drawnest-sever.vercel.app/artCollection/${params.id}`)
    },
    {
      path: '/artCollection/category/:category',
      element: <CategoryDetailsSection></CategoryDetailsSection>,
      loader: ({params})=> fetch(`https://drawnest-sever.vercel.app/artCollection/category/${params.Category}`)
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
