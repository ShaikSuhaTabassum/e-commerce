// import React, { useContext } from 'react';
// import './Navbar.css';
// import { BsCart3 } from 'react-icons/bs';
// import { Link, useNavigate } from 'react-router-dom';
// import { ShopContext } from '../../Context/ShopContext';

// const Navbar = () => {
//   const { getTotalCartItems, clearCart } = useContext(ShopContext); 
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('auth-token');
//     clearCart(); 
//     navigate('/'); 
//   };

//   return (
//     <header className="navbar">
//        <div className="nav-logo">
//         <Link to="/"><img src="/logo.png" alt="ShopVerse Logo" className="nav-logo-img" /></Link>
//         <p className="logo-text">Shop Verse</p>
//       </div>

//       <ul className="nav-menu">
//         <li><Link to="/">Shop</Link></li>   
//         <li><Link to="/men">Men</Link></li>
//         <li><Link to="/women">Women</Link></li>
//         <li><Link to="/kids">Kids</Link></li>
//       </ul>

//       <div className="nav-right">
//         {
//           localStorage.getItem('auth-token') ? (
//             <button className="logout-btn" onClick={handleLogout}>Logout</button>
//           ) : (
//             <Link to="/login">
//               <button className="login-btn">Login</button>
//             </Link>
//           )
//         }

//         <div className="cart-wrapper">
//           <Link to="/cart">
//             <BsCart3 className="cart-icon" size={30} />
//           </Link>
//           <span className="nav-cart-count">{getTotalCartItems()}</span>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import React, { useContext, useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { BsCart3 } from 'react-icons/bs';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const { getTotalCartItems, clearCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const navToggleButtonRef = useRef(null); // Ref for the hamburger button

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        if (mobileMenuRef.current) {
          const firstFocusableElement = mobileMenuRef.current.querySelector('a, button, input, select, [tabindex="0"]');
          firstFocusableElement?.focus();
        }
      }, 0); 
    }
    
    else {
      document.body.style.overflow = '';
      navToggleButtonRef.current?.focus(); 
    }

    return () => {
      document.body.style.overflow = ''; 
    };
  }, [mobileMenuOpen]); 

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    clearCart();
    navigate('/');
    setMobileMenuOpen(false); // Close menu on logout
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false); // Close menu on link click
  };

  return (
    <header className="navbar">
      <div className="nav-logo">
        <Link to="/" onClick={handleLinkClick}>
          <img src="/logo.png" alt="ShopVerse Logo" className="nav-logo-img" />
        </Link>
        <p className="logo-text">Shop Verse</p>
      </div>

      <button
        ref={navToggleButtonRef} 
        className="nav-toggle"
        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMobileMenuOpen((open) => !open)}
      >
        {mobileMenuOpen ? <FiX size={32} /> : <FiMenu size={32} />}
      </button>

      <nav aria-label="Primary navigation" className="nav-menu-wrapper">
        <ul className="nav-menu">
          <li><Link to="/" onClick={handleLinkClick}>Shop</Link></li>
          <li><Link to="/men" onClick={handleLinkClick}>Men</Link></li>
          <li><Link to="/women" onClick={handleLinkClick}>Women</Link></li>
          <li><Link to="/kids" onClick={handleLinkClick}>Kids</Link></li>
        </ul>
      </nav>

      <div className="nav-right">
        {localStorage.getItem('auth-token') ? (
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login" onClick={handleLinkClick}>
            <button className="login-btn">Login</button>
          </Link>
        )}
        <div className="cart-wrapper">
          <Link to="/cart" aria-label="View cart" tabIndex={mobileMenuOpen ? -1 : 0}>
            <BsCart3 className="cart-icon" size={30} />
          </Link>
          <span className="nav-cart-count" aria-live="polite" aria-atomic="true">
            {getTotalCartItems()}
          </span>
        </div>
      </div>

      {/* Mobile side menu */}
      <nav
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`mobile-menu${mobileMenuOpen ? ' open' : ''}`}
        aria-hidden={!mobileMenuOpen} // This should be controlled by the open/close state
      >
        <div className="mobile-menu-header">
          <Link to="/" onClick={handleLinkClick} className="mobile-menu-logo-link">
            <img src="/logo.png" alt="ShopVerse Logo" className="mobile-menu-logo" />
            <span className="mobile-menu-logo-text">Shop Verse</span>
          </Link>

          {localStorage.getItem('auth-token') ? (
            <button className="logout-btn mobile-auth-btn" onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/login" onClick={handleLinkClick}>
              <button className="login-btn mobile-auth-btn">Login</button>
            </Link>
          )}

          <Link to="/cart" onClick={handleLinkClick} className="mobile-menu-cart-icon" aria-label="View cart">
            <BsCart3 className="cart-icon" size={25} />
            <span className="nav-cart-count">{getTotalCartItems()}</span>
          </Link>
        </div>

        <ul>
          <li><Link to="/" onClick={handleLinkClick}>Shop</Link></li>
          <li><Link to="/men" onClick={handleLinkClick}>Men</Link></li>
          <li><Link to="/women" onClick={handleLinkClick}>Women</Link></li>
          <li><Link to="/kids" onClick={handleLinkClick}>Kids</Link></li>
        </ul>
      </nav>

      {/* Backdrop */}
      {mobileMenuOpen && (
        <div
          className="mobile-backdrop"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Navbar;
