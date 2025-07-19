
import React, { useContext, useState } from 'react';
import './CArtItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assests/cart_cross_icon.png';
import { useNavigate } from 'react-router-dom';

const CartItems = () => {
  const {
    getTotalCartAmount,
    all_product,
    cartItems,
    selectedSizeMap,
    removeFromCart,
    clearCart
  } = useContext(ShopContext);

  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');
  const navigate = useNavigate();

  const handleCheckout = () => {
    clearCart();
    if (localStorage.getItem('auth-token')) {
      fetch('https://e-commerce-prt4.onrender.com/clearcart', {
        method: 'POST',
        headers: {
          'auth-token': localStorage.getItem('auth-token'),
          'Content-Type': 'application/json'
        }
      });
    }
    navigate('/success');
  };

  const subtotal = getTotalCartAmount();
  const discountedTotal = (subtotal - (subtotal * discount)).toFixed(2);

  const handleApplyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    if (code === 'SHOP10') {
      setDiscount(0.10); 
      setPromoMessage('Promo applied! 🎉 10% discount');
    } else {
      setDiscount(0);
      setPromoMessage('Invalid promo code ');
    }
  };

  return (
    <div className="cartitems">
      <div className="cartItems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Size</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format">
                {/* <img src={e.image} alt="" className="carticon-product-icon" /> */}
                <img
  src={
    e.image.includes("localhost")
      ? e.image.replace("http://localhost:4000", "https://e-commerce-prt4.onrender.com")
      : e.image
  }
  alt={e.name} 
  className="carticon-product-icon"
/>
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <p>{selectedSizeMap[e.id] || "M"}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)}
                  alt="Remove"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            {discount > 0 && (
              <div className="cartitems-total-item">
                <p>Promo Discount (10%)</p>
                <p>- ${ (subtotal * discount).toFixed(2) }</p>
              </div>
            )}
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${discountedTotal}</h3>
            </div>
            <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
          </div>

          <div className="cartitems-promocode">
          <p>
  💡 Use promo code <strong>SHOP10</strong> to get <strong>10% OFF</strong> your order!
            </p>
            <div className="cartitem-promobox">
              <input
                type="text"
                placeholder="promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button onClick={handleApplyPromo}>Submit</button>
            </div>
            {promoMessage && (
              <p style={{ marginTop: '10px', color: discount > 0 ? 'green' : 'red' }}>
                {promoMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
