import React from 'react';
import { useNavigate } from 'react-router-dom'
import "./PaymentSucess.css";// ✅ Make sure the file is in the same folder
import successGif from './sucess.gif';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="payment-success-container">
      <img src={successGif} alt="Payment Successful" className="success-gif" />
      <h2>Payment Successful!</h2>
      <p>Your order has been placed successfully.</p>
      <button className="back-btn" onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default PaymentSuccess;
