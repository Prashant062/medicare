        
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"

import "./layout.css"
import LandingPage from "./LandingPage/LandingPage"
import Services from "./Services/Services"
import ClinicInnovation from "./ClinicInnovation/ClinicInnovation"
import Customers from "./Customers/Customers"
import Newsletter from "./Newsletter/Newsletter"
import Footer from "./Footer/Footer"
import Specialist from "./Specialist/Specialist"

const Layout = () => {

  return (
    <>
    <LandingPage/>
    <Services/>
    <ClinicInnovation/>
    <Specialist/>
    <Customers/>
    <Newsletter/>
    <Footer/>
        
    </>
  )
}

export default Layout
