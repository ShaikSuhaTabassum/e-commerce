import React, { useContext } from 'react';
import './Navbar.css';
import { BsCart3 } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const { getTotalCartItems, clearCart } = useContext(ShopContext); 
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    clearCart(); 
    navigate('/'); 
  };

  return (
    <header className="navbar">
       <div className="nav-logo">
        <Link to="/"><img src="/logo.png" alt="ShopVerse Logo" className="nav-logo-img" /></Link>
        <p className="logo-text">Shop Verse</p>
      </div>

      <ul className="nav-menu">
        <li><Link to="/">Shop</Link></li>   
        <li><Link to="/men">Men</Link></li>
        <li><Link to="/women">Women</Link></li>
        <li><Link to="/kids">Kids</Link></li>
      </ul>

      <div className="nav-right">
        {
          localStorage.getItem('auth-token') ? (
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/login">
              <button className="login-btn">Login</button>
            </Link>
          )
        }

        <div className="cart-wrapper">
          <Link to="/cart">
            <BsCart3 className="cart-icon" size={30} />
          </Link>
          <span className="nav-cart-count">{getTotalCartItems()}</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
