import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Admin from './Components/Admin/Admin'
import { Routes, Route } from 'react-router-dom'; 
import Login from './Login.jsx'; // Import the Login component
import AddProduct from './Components/Addproduct/AddProduct.jsx';
import ListProduct from './Components/ListProduct/ListProduct.jsx';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<ProtectedRoute><div>
           <Navbar />
          <Admin />

        </div></ProtectedRoute>} />
        <Route path="/addproduct" element={<ProtectedRoute><AddProduct /></ProtectedRoute>} />
        <Route path="/listproduct" element={<ProtectedRoute><ListProduct /></ProtectedRoute>} />
      </Routes>
    </div>
  )
}



export default App