import React from 'react'
import "../styles/Services.css"
import dentalCare from "../../images/dentalCare.jpeg"
import Neurology from "../../images/Neurology.png"
import Prediatrics from "../../images/Prediatrics.png"
import Pulmonary from "../../images/Pulmonary.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <>
            <div className="service-container">
                <div className="our-services">
                    <h1>Our Services</h1>

                </div>
                <div className="service-content">
                    <p>We provide the most full medical services, so every person could heave the oppurtunity to receive qualitative medical help.</p>
                </div>
                <div className="provided-service">
                    <div className="services-pro">
                        <img src={dentalCare} alt="" />
                        <p>Dental Care</p>
                        <span className="learn-more">
                             <a href="/">LEARN MORE <span><FontAwesomeIcon  icon={faAngleRight} /> </span></a>
                        </span>
                    </div>
                    <div className="services-pro">
                        <img src={Pulmonary} alt="" />
                        <p>Pulmonary</p>
                        <span className="learn-more">
                             <a href="/">LEARN MORE <span><FontAwesomeIcon  icon={faAngleRight} /> </span></a>
                        </span>
                    </div>
                    <div className="services-pro">
                        <img src={Neurology} alt="" />
                        <p>Neurological</p>
                        <span className="learn-more">
                             <a href="/">LEARN MORE <span><FontAwesomeIcon  icon={faAngleRight} /> </span></a>
                        </span>
                    </div>
                    <div className="services-pro">
                        <img src={Prediatrics} alt="" />
                        <p>Prediatrics</p>
                        <span className="learn-more">
                             <a href="/">LEARN MORE <span><FontAwesomeIcon  icon={faAngleRight} /> </span></a>
                        </span>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Services
