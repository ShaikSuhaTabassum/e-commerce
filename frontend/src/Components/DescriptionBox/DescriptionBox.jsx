import React from 'react'
import './DescriptionBox.css'


const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box"> Description </div>
            <div className="descriptionbox-nav-box fade"> Reviews (122)</div>
        </div>
      <div className="descriptionbox-description">
        {/* <p> 
            An e-commerce app is a mobile application that allows users to browse, purchase, and manage products or services online. It essentially functions as a digital storefront, providing a convenient way for consumers to shop from anywhere, anytime. These apps are designed to facilitate online retail, providing features like product browsing, shopping carts, payment processing, and order tracking. 
        </p>
        <p> An e-commerce app is a mobile application that allows users to browse, purchase, and manage products or services online. It essentially functions as a digital storefront, providing a convenient way for consumers to shop from anywhere, anytime. These apps are designed to facilitate online retail, providing features like product browsing, shopping carts, payment processing, and order tracking. 
        </p> */}
      </div>
    </div>
  )
}

export default DescriptionBox
