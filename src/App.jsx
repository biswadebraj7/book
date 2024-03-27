import { useState } from 'react'

import './App.css'
import Header from './Header'
import { Link, Outlet } from 'react-router-dom'
import Footer from './Footer'




function App() {


  return (
    <>
     <div>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>

     </div>
    </>
  )
}

export default App
