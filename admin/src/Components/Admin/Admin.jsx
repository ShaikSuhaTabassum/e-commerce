import React from 'react'
import './Admin.css'
import Slidebar from '../Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import AddProduct from '../Addproduct/AddProduct'
import ListProduct from '../ListProduct/ListProduct'
import Navbar from '../Navbar/Navbar'

const Admin = () => {
  return (
    <div className='Admin'>
      
      <Slidebar/>
      <h1 className='heading'>Admin Dashboard</h1>
      <Routes>
        <Route  path='/addproduct' element={<AddProduct/>}/>
        <Route  path='/listproduct' element={<ListProduct/>}/>

      </Routes>
    </div>
  )
}

export default Admin
