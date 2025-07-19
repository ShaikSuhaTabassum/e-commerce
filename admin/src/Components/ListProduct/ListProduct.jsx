import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import cross_icon from '../../assests/cross_icon.png';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    try {
      const res = await fetch('https://e-commerce-prt4.onrender.com/allproducts');
      const data = await res.json();
      console.log(data);
      setAllProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    try {
      const res = await fetch("https://e-commerce-prt4.onrender.com/deleteproduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id })
      });

      const data = await res.json();
      if (data.success) {
        setAllProducts((prev) => prev.filter((item) => item.id !== id));
      } else {
        alert("Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Error deleting product");
    }
  };

  return (
    <>
    <Navbar/>
    <div className='sidebar-listproduct'>
      <Sidebar/>
<div className='listproduct'>
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product, index) => (
          <div key={index} className="listproduct-format-main listproduct-format">
            <img
  src={
    product.image.includes("localhost")
      ? product.image.replace("http://localhost:4000", "https://e-commerce-prt4.onrender.com")
      : product.image
  }
  alt={product.name}
  style={{ width: "80px", height: "80px", objectFit: "cover" }}
/>


            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <img
              src={cross_icon}
              alt="Remove"
              className="listproduct-remove-icon"
              onClick={() => handleDelete(product.id)}
            />
          </div>
        ))}
      </div>
    </div>
    </div>
    
    </>
    
  );
};

export default ListProduct;
