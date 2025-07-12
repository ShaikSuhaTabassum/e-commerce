import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assests/star_icon.png';
import star_dull_icon from '../Assests/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select a size before adding to cart.');
            return;
        }
        addToCart(product.id);
    };

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="PI" />
                    <img src={product.image} alt="PI" />
                    <img src={product.image} alt="PI" />
                    <img src={product.image} alt="PI" />
                </div>
                <div className="producctdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>

            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>

                <div className="producctdisplay-right-prices">
                    <div className="productdispaly-right-price-old">
                        ${product.old_price}
                    </div>
                    <div className="productdispaly-right-price-new">
                        ${product.new_price}
                    </div>
                </div>

                <div className="productdisplay-right-description">
                    {product.description || "No description available."}
                </div>

                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-size-options">
                        {["S", "M", "L", "XL", "XXL"].map(size => (
                            <div
                                key={size}
                                className={selectedSize === size ? "selected-size" : ""}
                                onClick={() => handleSizeClick(size)}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>

                <button onClick={handleAddToCart}>ADD TO CART</button>

                <p className='productdisplay-right-category'>
                    <span>Category:</span> {product.category || "General"}
                </p>

                <p className='productdisplay-right-category'>
                    <span>Tags:</span> {product.tags?.join(", ") || "Latest"}
                </p>
            </div>
        </div>
    );
};

export default ProductDisplay;
