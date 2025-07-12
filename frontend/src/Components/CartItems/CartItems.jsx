import React, { useContext } from 'react';
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

  const navigate = useNavigate();

  const handleCheckout = () => {
    clearCart();

    if (localStorage.getItem('auth-token')) {
      fetch('https://e-commerce-79is.vercel.app/clearcart', {
        method: 'POST',
        headers: {
          'auth-token': localStorage.getItem('auth-token'),
          'Content-Type': 'application/json'
        }
      });
    }

    navigate('/success');
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
                <img src={e.image} alt="" className="carticon-product-icon" />
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
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
            <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
          </div>

          <div className="cartitems-promocode">
            <p>If you have a promo code, enter it here</p>
            <div className="cartitem-promobox">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;