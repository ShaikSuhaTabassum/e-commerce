import React, { useState } from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  const [email,setemail]=useState("")
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email </h1>
        <p> Subscribe to our NewsLetter and stay updated</p>
        <div>
            <input type='email' placeholder='Your Email id.....' onChange={(e)=>setemail(e.target.value)} value={email}/>
            <button onClick={()=>setemail("")}>  Subscribe </button>
        </div>
      
    </div>
  )
}

export default NewsLetter
