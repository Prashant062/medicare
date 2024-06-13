import * as React from "react"

import Layout from "../components/layout"
import LandingPage from "../components/LandingPage/LandingPage"
import Services from "../components/Services/Services"
import ClinicInnovation from "../components/ClinicInnovation/ClinicInnovation"
import Specialist from "../components/Specialist/Specialist"
import Customers from "../components/Customers/Customers"
import Newsletter from "../components/Newsletter/Newsletter"
import Footer from "../components/Footer/Footer"


const IndexPage = () => (
  <Layout>
    <LandingPage/>
    <Services/>
    <ClinicInnovation/>
    <Specialist/>
    <Customers/>
    <Newsletter/>
    <Footer/>
  </Layout>
)


export default IndexPage
