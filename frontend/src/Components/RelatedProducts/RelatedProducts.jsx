import React, { useContext } from 'react';
import './RelatedProducts.css';
import { ShopContext } from '../../Context/ShopContext';
import Item from '../Items/Item';

const shuffleArray = (arr) => [...arr].sort(() => 0.5 - Math.random());

const RelatedProducts = ({ currentProduct }) => {
  const { all_product } = useContext(ShopContext);

  const related = shuffleArray(
    all_product.filter(
      (item) =>
        item.category === currentProduct.category && item.id !== currentProduct.id
    )
  ).sort(() => 0.5 - Math.random()) 
    .slice(0, 4);


  return (
    <div className='relatedproducts'>
      <h1> Related Products </h1>
      <hr />
      <div className="relatedproducts-item">
        {related.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={
              item.image.includes("localhost")
                ? item.image.replace("http://localhost:4000", "https://e-commerce-prt4.onrender.com")
                : item.image
            }
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
