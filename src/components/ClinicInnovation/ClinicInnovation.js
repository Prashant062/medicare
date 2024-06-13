import React from 'react'
import "../styles/ClinicInnovation.css"
import emergency from "../../images/emergency.jpeg"
import EmergencyService from "../../images/24emergency.png"
import ProfessionalDoctor from "../../images/professional-doctor.png"

const ClinicInnovation = () => {
    return (
        <>
            <div className="clinic-innovation">
                <div className="clinic-inov">
                    <h1>Clinic With Innovative</h1>
                    <p>We provide the most full medical services, so every person could heave the oppurtunity to receive qualitative medical help.</p>
                    <button>Learn More</button>
                </div>
                <div className="clinic-service">
                    <div className="qualified">
                        <img src={ProfessionalDoctor} alt="" />
                        <p>Qualified Doctors</p>
                    </div>
                    <div className="emergency-care">
                        <img src={emergency} alt="" />
                        <p>Emergency Care</p>
                    </div>
                    <div className="emergency-service">
                        <img src={EmergencyService} alt="" />
                        <p>24 Hours Service</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClinicInnovation;
