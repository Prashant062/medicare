import React from 'react'
import "../styles/LandingPage.css"
import Navbar from '../Navbar/Navbar'
const LandingPage = () => {
  return (
    <>
      <section className="container">
    <Navbar showButton={true}/>
        <div className="backgeound">
          
        </div> 
        <div className="main-container">
          <div className="content-box">
            <div className="container-content">
              <h5>Welcome to MediCare+ Clinic</h5>
              <h1>Best Specialists</h1>
              <p>We are on the leading edge of cancer care. Providing the full continuum of cancer treatments and supportive care services in a single convenient location.</p>
            </div>
            <div className="button-tag">
              <div className='appoint'>
                <a href="/" >Make an Appointment</a>
              </div>
              <div className='depart'>
                <a href="/" >Departments</a>
              </div>
            </div>
          </div>
          <div className="section-box">
          
          </div>
        </div>

      </section>
    </>
  )
}

export default LandingPage
