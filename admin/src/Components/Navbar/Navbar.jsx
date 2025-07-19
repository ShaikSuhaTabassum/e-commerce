import React from 'react';
import './Navbar.css';
import navLogo from '../../assests/nav-logo.svg';
import { Link,useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='Navbar'>
      <Link to="/"><img src={navLogo} alt="Logo" className='nav-logo' /></Link>
    <button  className ="nav-logout-button" onClick={() => { localStorage.removeItem('admin-auth-token'); navigate('/login')}}>
    {/* You might put some text or other content inside the <p> tag here */}
    Log Out
</button>
    </div>
  );
};

export default Navbar;
