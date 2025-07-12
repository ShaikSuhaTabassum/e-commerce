import React from 'react';
import './Offers.css';
import exclusive_image from '../Assests/exclusive_image.png';

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h2>Exclusive Offers For You</h2>
        <p>Only on best-selling products</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="Exclusive Offer" />
      </div>
    </div>
  );
};

export default Offers;
