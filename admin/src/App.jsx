import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Admin from './Components/Admin/Admin';
import EditProduct from './pages/EditProduct'; // ✅ Make sure path is correct

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/edit-product/:id" element={<EditProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
