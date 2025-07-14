import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddProduct.css'; // reuse your existing form styles

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    old_price: '',
    new_price: '',
    category: '',
    image: '',
    description: ''
  });

 useEffect(() => {
  axios
    .get(`https://e-commerce-prt4.onrender.com/product/${id}`)
    .then((res) => setFormData(res.data))
    .catch((err) => {
      console.error(err);
      alert("Failed to fetch product details");
    });
}, [id]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`https://e-commerce-prt4.onrender.com/updateproduct/${id}`, formData);
      alert("Product updated successfully!");
      navigate("/admin/listproduct");
    } catch (error) {
      console.error("Update error:", error);
      alert("Failed to update product");
    }
  };

  return (
    <div className="add-product">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit} className="addproduct-form">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="old_price"
          placeholder="Old Price"
          value={formData.old_price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="new_price"
          placeholder="New Price"
          value={formData.new_price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default EditProduct;
