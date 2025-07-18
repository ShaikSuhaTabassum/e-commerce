import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup'; 
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assests/banner_mens.png';
import women_banner from './Components/Assests/banner_women.png';
import kid_banner from './Components/Assests/banner_kids.png';
import PaymentSuccess from './Components/PaymentSucess/PaymentSucess';
import ProtectedRoute from './Components/ProtectedRoute';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Protected shop and category routes */}
          <Route path="/" element={
            <ProtectedRoute>
              <Shop />
            </ProtectedRoute>
          } />
          <Route path="/men" element={
            <ProtectedRoute>
              <ShopCategory banner={men_banner} category="men" />
            </ProtectedRoute>
          } />
          <Route path="/women" element={
            <ProtectedRoute>
              <ShopCategory banner={women_banner} category="women" />
            </ProtectedRoute>
          } />
          <Route path="/kids" element={
            <ProtectedRoute>
              <ShopCategory banner={kid_banner} category="kid" />
            </ProtectedRoute>
          } />

          {/* ✅ FIXED product route */}
          <Route path="/product/:productId" element={<Product />} />


          {/* Protected pages */}
          <Route path="/cart" element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          } />
          <Route path="/success" element={
            <ProtectedRoute>
              <PaymentSuccess />
            </ProtectedRoute>
          } />

          {/* Public route */}
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
