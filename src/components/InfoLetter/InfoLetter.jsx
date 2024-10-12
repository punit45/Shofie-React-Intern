import React from 'react';
import "./InfoLetter.css"; 

const InfoLetter = () => {
  return (
    <div className='info-letter'>
        <h1>Get Exclusive Offers on Your Email</h1>
        <p>Subscribe to our newsletter and stay updated.</p>
        <div>
            <input type="email" placeholder='Your E-Mail Id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default InfoLetter