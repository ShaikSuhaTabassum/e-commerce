import React, { createContext, useState, useEffect } from "react";

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
    fetch("https://e-commerce-79is.vercel.app/allproducts")
      .then((res) => res.json())
      .then((data) => {
        console.log("Products fetched:", data);
        setAll_Product(data);
        const defaultCart = getDefaultCart(data);

        const authToken = localStorage.getItem("auth-token");

        if (authToken) {
          fetch("https://e-commerce-79is.vercel.app/getcart", {
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
      fetch("https://e-commerce-79is.vercel.app/addtocart", {
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
      fetch("https://e-commerce-79is.vercel.app/removefromcart", {
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
    console.log(" Cart cleared");
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

  if (all_product.length === 0) return <div>Loading products...</div>;

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;