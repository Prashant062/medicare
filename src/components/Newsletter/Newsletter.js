import React from 'react'
import "../styles/Newsletter.css";

const Newsletter = () => {
  return (
    <>
      <div className="newsletter">

        <div className="new-empty-box">

        </div>
        <div className="newsletter-main">
            <h2>Subscribe to Newsletter</h2>
            <p>We have a wide experience in experience design and strategy,</p>

            <div className="input-box">

            <input type="email" placeholder='Enter Your Email Adress' />
            <button>Send Now</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Newsletter
