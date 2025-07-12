// // import React, { createContext, useState, useEffect } from "react";

// export const ShopContext = createContext(null);

// const getDefaultCart = (products) => {
//   let cart = {};
//   products.forEach((product) => {
//     cart[product.id] = 0;
//   });
//   return cart;
// };

// const ShopContextProvider = (props) => {
//   const [all_product, setAll_Product] = useState([]);
//   const [cartItems, setCartItems] = useState({});
//   const [selectedSizeMap, setSelectedSizeMap] = useState({});

//   useEffect(() => {
//     fetch("http://localhost:4000/allproducts")
//       .then((res) => res.json())
//       .then((data) => {
//         setAll_Product(data);
//         const defaultCart = getDefaultCart(data);

//         const authToken = localStorage.getItem("auth-token");

//         if (authToken) {
//           fetch("http://localhost:4000/getcart", {
//             method: "POST",
//             headers: {
//               Accept: "application/form-data",
//               "auth-token": authToken,
//               "Content-Type": "application/json",
//             },
//             body: "",
//           })
//             .then((res) => res.json())
//             .then((userCart) => {
//               const mergedCart = { ...defaultCart, ...userCart };
//               setCartItems(mergedCart);
//             })
//             .catch(() => setCartItems(defaultCart));
//         } else {
//           setCartItems(defaultCart);
//         }
//       });
//   }, []);

//   const addToCart = (itemId, size = "M") => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: (prev[itemId] || 0) + 1,
//     }));

//     setSelectedSizeMap((prev) => ({
//       ...prev,
//       [itemId]: size,
//     }));

//     const authToken = localStorage.getItem("auth-token");
//     if (authToken) {
//       fetch("http://localhost:4000/addtocart", {
//         method: "POST",
//         headers: {
//           Accept: "application/form-data",
//           "auth-token": authToken,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ itemId, size }),
//       });
//     }
//   };

//   const removeFromCart = (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
//     }));

//     const authToken = localStorage.getItem("auth-token");
//     if (authToken) {
//       fetch("http://localhost:4000/removefromcart", {
//         method: "POST",
//         headers: {
//           Accept: "application/form-data",
//           "auth-token": authToken,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ itemId }),
//       });
//     }
//   };

//   const getTotalCartAmount = () => {
//     let total = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         const product = all_product.find((p) => p.id === Number(item));
//         if (product) {
//           total += product.new_price * cartItems[item];
//         }
//       }
//     }
//     return total;
//   };

//   const getTotalCartItems = () => {
//     let total = 0;
//     for (const item in cartItems) {
//       total += cartItems[item];
//     }
//     return total;
//   };

//   const clearCart = () => {
//     const emptyCart = getDefaultCart(all_product);
//     setCartItems(emptyCart);
//     setSelectedSizeMap({});
//   };

//   const contextValue = {
//     all_product,
//     cartItems,
//     selectedSizeMap,
//     addToCart,
//     removeFromCart,
//     clearCart,
//     getTotalCartAmount,
//     getTotalCartItems,
//   };

//   if (all_product.length === 0) return <div>Loading products...</div>;

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;
// // 
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
      fetch('http://localhost:4000/clearcart', {
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