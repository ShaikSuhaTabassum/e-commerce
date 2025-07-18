import React, { useContext, useState, useEffect } from 'react';
import './Css/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Items/Item';
import { IoMdArrowDropdown } from "react-icons/io";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  console.log("All Products:", all_product); // Debugging line

  const [sortOption, setSortOption] = useState('sort-by');
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    if (!all_product) return;

    const filtered = all_product.filter(item => item.category === props.category);
    let sorted = [...filtered];

    switch (sortOption) {
      case 'price-asc':
        sorted.sort((a, b) => a.new_price - b.new_price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.new_price - a.new_price);
        break;
      case 'name-asc':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        sorted.sort((a, b) => a.id - b.id);
    }

    setSortedProducts(sorted);
  }, [all_product, props.category, sortOption]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // ✅ Always use your Render backend for images
  const getImageUrl = (image) => {
  if (!image) return '';
  const filename = image.split('/').pop(); // get only the filename
  return `https://e-commerce-prt4.onrender.com/images/${filename}`;
};


  return (
    <div className="shop-category">
      <img src={props.banner} alt={`${props.category} banner`} />

      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-{sortedProducts.length}</span> out of {sortedProducts.length} products
        </p>

        <div className="custom-select-wrapper">
          <select value={sortOption} onChange={handleSortChange}>
            <option disabled value="sort-by">Sort by</option>
            <option value="price-asc">Price - Low to High</option>
            <option value="price-desc">Price - High to Low</option>
            <option value="name-asc">Name - A to Z</option>
            <option value="name-desc">Name - Z to A</option>
          </select>
          <IoMdArrowDropdown />
        </div>
      </div>

      <div className="shopcategory-products">
        {sortedProducts.map((item, i) => {
          const imageUrl = getImageUrl(item.image);
          console.log("Image URL:", imageUrl); // Check final URLs
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={imageUrl}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
