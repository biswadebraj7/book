import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home.jsx';
import Booklist from './Component/Booklist.jsx';
import Readpage from './Component/Readpage.jsx';
import Books from './CardComponent/Books.jsx';
import Details from './Details/Details.jsx';


const router=createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
   errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>

      },
      {
        path:"/book",
        element:<Booklist></Booklist>
      },
      {
        path:"/books",
        element:<Books></Books>

      },
      {
        path:"/detail",
        element:<Details />

      },
      {
        path:"/read",
        element:<Readpage></Readpage>
      }
    ]
    
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
     
    </RouterProvider>
  </React.StrictMode>,
)