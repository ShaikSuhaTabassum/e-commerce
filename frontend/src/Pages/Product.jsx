import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const { all_product } = useContext(ShopContext);
const { productId } = useParams();

console.log(" productId from URL:", productId);
console.log(" all_product from context:", all_product);

const product = all_product.length > 0
  ? all_product.find((e) => String(e.id) === productId)
  : null;
  console.log(" product from context:", product);

  return (
    <div>
      {product ? (
        <>
          <Breadcrums product={product} />
          <ProductDisplay product={product} />
          <DescriptionBox />
          {/* <RelatedProducts /> */}
          <RelatedProducts currentProduct={product} />

        </>
      ) : (
        <div style={{ padding: '30px', textAlign: 'center', color: 'red' }}>
          Product not found.
        </div>
      )}
    </div>
  );
};

export default Product;
