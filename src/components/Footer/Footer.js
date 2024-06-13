import React from "react"
import "../styles/Footer.css"
import Navbar from "../Navbar/Navbar"
const Footer = () => (
  <>
  <div className="footer">

    <Navbar showButton={false}/>
   
   <div className="footer-bottom">
    <span>f</span>
    <span>G</span>
    <span>X</span>
   </div>
   <div className="copy-right">
   <p>©2023 - 011BQ </p>
   </div>
   </div>
  </>
)

export default Footer
