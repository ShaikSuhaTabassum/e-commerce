import React from 'react';
import './Footer.css';
import footer_logo from '../Assests/logo_big.png';
import instagram_icon from '../Assests/instagram_icon.png';
import pintester_icon from '../Assests/pintester_icon.png';
import whatsapp_icon from '../Assests/whatsapp_icon.png';
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="footer logo" />
        <p>SHOP VERSE</p>
      </div>

      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Office</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="footer-social-icon">
        <div className="footer-icons-containner">
          <a href="https://www.instagram.com/crazyperson_7868/" target="__blank"><img src={instagram_icon} alt="Instagram" /></a>
        </div>

        <div className="footer-icons-containner">
        <a href="www.linkedin.com/in/suha-tabassum-shaik-a92b152a5" target="__blank"><FaLinkedin/></a>
        </div>
        <div className="footer-cpyright">
            <hr/>
            <p> Copyright @ 2025 -All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
