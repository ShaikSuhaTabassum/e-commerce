import React from 'react'
import './Hero.css'
import { FaArrowRight } from 'react-icons/fa';
import { IoMdArrowDown } from "react-icons/io";


const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2> freshStyles Just Arrived! </h2> 

            <div className="hand-hand-icon"> 
                <p> NEW </p>
                <img src="/hand-icon.png" alt="hand-icon" />
            </div>

            <p className="hero-line"> collections</p> 
            <p className="hero-line"> for everyone</p> 

            <div className="hero-latest-btn"> 
            <a href="#newcollections">
              <span>Latest Collection</span>
              <IoMdArrowDown className="scroll-down-icon"/>
            </a>
            </div>
            
        </div>

        <div className="hero-right">
            <img src="/hero1.png" alt="hero-image" />
        </div>
    </div>
  )
}

export default Hero