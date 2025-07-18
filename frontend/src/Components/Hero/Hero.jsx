import React from 'react'
import './Hero.css'
// import { FaArrowRight } from 'react-icons/fa';
// import { IoMdArrowDown } from "react-icons/io";


const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2> NEW ARRIVALS ONLY </h2>

            <div className="hand-hand-icon">
                <p> new </p>
                <img src="/hand-icon.png" alt="hand-icon" />
            </div>

            <p className="hero-line"> collections</p>
            <p className="hero-line"> for everyone</p> 

            <div className="hero-latest-btn">
            <a href="#newcollections">
              <span>Latest Collection</span>
            {/* <FaArrowRight margin-top="30px"/> */}
</a>            </div>
{/* <div className='arrow-down'>
<IoMdArrowDown fontSize="20px"/>
</div> */}
{/* <div className="bounce-wrapper">
  <span className="bounce-icon"><IoMdArrowDown fontSize="40px"/></span>
</div> */}
        </div>

        <div className="hero-right">
            <img src="/hero.png" alt="hero-image" /> 
        </div>
    </div>
  )
}

export default Hero
