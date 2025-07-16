

import React, { createContext, useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";
import "./ShopContext.css"; // Import the CSS for loader styling
// ...existing code...
export const ShopContext = createContext(null);

const getDefaultCart = (products) => {
  let cart = {};
  products.forEach((product) => {
    cart[product.id] = 0;
  });
  return cart;
};

const ShopContextProvider = (props) => {
  const [all_product, setAll_Product] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [selectedSizeMap, setSelectedSizeMap] = useState({});

  useEffect(() => {
    fetch("https://e-commerce-prt4.onrender.com/allproducts")
      .then((res) => res.json())
      .then((data) => {
        console.log("Products fetched:", data);
        setAll_Product(data);
        const defaultCart = getDefaultCart(data);

        const authToken = localStorage.getItem("auth-token");

        if (authToken) {
          fetch("https://e-commerce-prt4.onrender.com/getcart", {
            method: "POST",
            headers: {
              Accept: "application/form-data",
              "auth-token": authToken,
              "Content-Type": "application/json",
            },
            body: "",
          })
            .then((res) => res.json())
            .then((userCart) => {
              console.log("🛒 User cart from backend:", userCart);
              const mergedCart = { ...defaultCart, ...userCart };
              setCartItems(mergedCart);
            })
            .catch((err) => {
              console.error(" Failed to fetch user cart:", err);
              setCartItems(defaultCart);
            });
        } else {
          setCartItems(defaultCart);
        }
      })
      .catch((err) => console.error(" Failed to fetch products:", err));
  }, []);

  useEffect(() => {
    console.log("🧺 Cart updated:", cartItems);
  }, [cartItems]);

  const addToCart = (itemId, size = "M") => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));

    setSelectedSizeMap((prev) => ({
      ...prev,
      [itemId]: size,
    }));

    const authToken = localStorage.getItem("auth-token");
    if (authToken) {
      fetch("https://e-commerce-prt4.onrender.com/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": authToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId, size }),
      })
        .then((res) => res.json())
        .then((data) => console.log("addtocart response:", data));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));

    const authToken = localStorage.getItem("auth-token");
    if (authToken) {
      fetch("https://e-commerce-prt4.onrender.com/removefromcart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": authToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId }),
      })
        .then((res) => res.json())
        .then((data) => console.log("removefromcart response:", data));
    }
  };

  const getTotalCartAmount = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const product = all_product.find((p) => p.id === Number(item));
        if (product) {
          total += product.new_price * cartItems[item];
        }
      }
    }
    return total;
  };

  const getTotalCartItems = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        total += cartItems[item];
      }
    }
    return total;
  };

  const clearCart = () => {
    const emptyCart = getDefaultCart(all_product);
    setCartItems(emptyCart);
    setSelectedSizeMap({});
    console.log("🧹 Cart cleared locally");

    const authToken = localStorage.getItem("auth-token");
    if (authToken) {
      fetch("https://e-commerce-prt4.onrender.com/clearcart", {
        method: "POST",
        headers: {
          "auth-token": authToken,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("✅ Cart cleared from backend:", data);
        })
        .catch((err) => {
          console.error("❌ Failed to clear cart from backend:", err);
        });
    }
  };

  const contextValue = {
    all_product,
    cartItems,
    selectedSizeMap,
    addToCart,
    removeFromCart,
    clearCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  if (all_product.length === 0) return <div className="loader"><BeatLoader
  color="pink"
  size={50}
/></div>;

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
