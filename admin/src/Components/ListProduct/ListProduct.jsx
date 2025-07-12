import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import cross_icon from '../../assests/cross_icon.png';

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    const res = await fetch('https://e-commerce-o99z.onrender.com/allproducts');
    const data = await res.json();
    setAllProducts(data);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    try {
      const res = await fetch("https://e-commerce-o99z.onrender.com/deleteproduct", {
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
    <div className='listproduct'>
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
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
            <img src={product.image} alt="" className="listproduct-product-icon" />
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
  );
};

export default ListProduct;
