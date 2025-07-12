import React from 'react';
import './Navbar.css';
import navProfile from '../../assests/nav-profile.png';
import navLogo from '../../assests/nav-logo.svg';


const Navbar = () => {
  return (
    <div className='Navbar'>
      <img src={navLogo} alt="Logo" className='nav-logo' />
      <img src={navProfile} alt="Profile" className='nav-profile' />
    </div>
  );
};

export default Navbar;
