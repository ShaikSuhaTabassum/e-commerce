// import React, { createContext, useState, useEffect } from "react";

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

//   useEffect(() => {
//     fetch("http://localhost:4000/allproducts")
//       .then((res) => res.json())
//       .then((data) => {
//         setAll_Product(data);
//         const defaultCart = getDefaultCart(data);

//         if (localStorage.getItem('auth-token')) {
//           fetch('http://localhost:4000/getcart', {
//             method: 'POST',
//             headers: {
//               Accept: 'application/form-data',
//               'auth-token': `${localStorage.getItem('auth-token')}`,
//               'Content-Type': 'application/json'
//             },
//             body: "",
//           })
//             .then((response) => response.json())
//             .then((userCart) => {
//               const mergedCart = { ...defaultCart, ...userCart };
//               setCartItems(mergedCart);
//             })
//             .catch((err) => {
//               console.error("Failed to fetch user cart:", err);
//               setCartItems(defaultCart);
//             });
//         } else {
//           setCartItems(defaultCart);
//         }
//       })
//       .catch((err) => console.error("Failed to fetch products:", err));
//   }, []);

  

//   useEffect(() => {
//     console.log("Cart Updated:", cartItems);
//   }, [cartItems]);

//   const addToCart = (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: prev[itemId] + 1,
//     }));
//     if (localStorage.getItem('auth-token')) {
//       fetch('http://localhost:4000/addtocart', {
//         method: 'POST',
//         headers: {
//           Accept: 'application/form-data',
//           'auth-token': `${localStorage.getItem('auth-token')}`,
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           "itemId": itemId
//         })
//       })
//         .then((response) => response.json())
//         .then((data) => console.log(data));
//     }
//   };

//   const removeFromCart = (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: prev[itemId] - 1,
//     }));
//     if (localStorage.getItem('auth-token')) {
//       fetch('http://localhost:4000/removefromcart', {
//         method: 'POST',
//         headers: {
//           Accept: 'application/form-data',
//           'auth-token': `${localStorage.getItem('auth-token')}`,
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           "itemId": itemId
//         })
//       })
//         .then((response) => response.json())
//         .then((data) => console.log(data));
//     }
//   };

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         const itemInfo = all_product.find(
//           (product) => product.id === Number(item)
//         );
//         if (itemInfo) {
//           totalAmount += itemInfo.new_price * cartItems[item];
//         }
//       }
//     }
//     return totalAmount;
//   };

//   const getTotalCartItems = () => {
//     let totalItem = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         totalItem += cartItems[item];
//       }
//     }
//     return totalItem;
//   };

//   const clearCart = () => {
//     setCartItems(getDefaultCart(all_product));
//   };

//   const contextValue = {
//     getTotalCartItems,
//     all_product,
//     cartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//     clearCart, 
//   };

//   if (all_product.length === 0) return <div>Loading products...</div>;

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;  
// import React, { createContext, useState, useEffect } from "react";

// export const ShopContext = createContext(null);

// // ✅ Initialize empty cart for all products
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

//   // ✅ Fetch products + Load Cart
//   useEffect(() => {
//     fetch("http://localhost:4000/allproducts")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("✅ Products fetched:", data);
//         setAll_Product(data);
//         const defaultCart = getDefaultCart(data);

//         const authToken = localStorage.getItem("auth-token");

//         if (authToken) {
//           // ✅ Load user cart if logged in
//           fetch("http://localhost:4000/getcart", {
//             method: "POST",
//             headers: {
//               Accept: "application/form-data",
//               "auth-token": authToken,
//               "Content-Type": "application/json",
//             },
//             body: "", // No body needed
//           })
//             .then((res) => res.json())
//             .then((userCart) => {
//               console.log("🛒 User cart from backend:", userCart);
//               const mergedCart = { ...defaultCart, ...userCart };
//               setCartItems(mergedCart);
//             })
//             .catch((err) => {
//               console.error("❌ Failed to fetch user cart:", err);
//               setCartItems(defaultCart);
//             });
//         } else {
//           // ✅ Guest user cart
//           setCartItems(defaultCart);
//         }
//       })
//       .catch((err) => console.error("❌ Failed to fetch products:", err));
//   }, []);

//   // 🪄 Debug: watch cart updates
//   useEffect(() => {
//     console.log("🧺 Cart updated:", cartItems);
//   }, [cartItems]);

//   // ✅ Add item
//   const addToCart = (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: prev[itemId] + 1,
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
//         body: JSON.stringify({ itemId }),
//       })
//         .then((res) => res.json())
//         .then((data) => console.log("✅ addtocart response:", data));
//     }
//   };

//   // ✅ Remove item
//   const removeFromCart = (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: prev[itemId] - 1,
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
//       })
//         .then((res) => res.json())
//         .then((data) => console.log("✅ removefromcart response:", data));
//     }
//   };

//   // ✅ Total cart value
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

//   // ✅ Total items in cart
//   const getTotalCartItems = () => {
//     let total = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         total += cartItems[item];
//       }
//     }
//     return total;
//   };

//   // ✅ Clear cart
//   const clearCart = () => {
//     const emptyCart = getDefaultCart(all_product);
//     setCartItems(emptyCart);
//     console.log("🧹 Cart cleared");
//   };

//   // ✅ Provide context
//   const contextValue = {
//     all_product,
//     cartItems,
//     addToCart,
//     removeFromCart,
//     clearCart,
//     getTotalCartAmount,
//     getTotalCartItems,
//   };

//   // ⏳ Show loader until products fetched
//   if (all_product.length === 0) return <div>Loading products...</div>;

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;
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
    fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Products fetched:", data);
        setAll_Product(data);
        const defaultCart = getDefaultCart(data);

        const authToken = localStorage.getItem("auth-token");

        if (authToken) {
          fetch("http://localhost:4000/getcart", {
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
              console.error("❌ Failed to fetch user cart:", err);
              setCartItems(defaultCart);
            });
        } else {
          setCartItems(defaultCart);
        }
      })
      .catch((err) => console.error("❌ Failed to fetch products:", err));
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
      fetch("http://localhost:4000/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": authToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId, size }),
      })
        .then((res) => res.json())
        .then((data) => console.log("✅ addtocart response:", data));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));

    const authToken = localStorage.getItem("auth-token");
    if (authToken) {
      fetch("http://localhost:4000/removefromcart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": authToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId }),
      })
        .then((res) => res.json())
        .then((data) => console.log("✅ removefromcart response:", data));
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
    console.log("🧹 Cart cleared");
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