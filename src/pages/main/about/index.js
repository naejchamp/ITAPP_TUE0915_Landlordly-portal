import React from "react";
import Navbar from "../../../components/main/navbar";

const About = ()=>{
    return(
        <div class="container-xxl bg-white p-0">
        <Navbar />
        {/* About Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="about-img position-relative overflow-hidden p-5 pe-0">
                  <img className="img-fluid w-100" src={require('../../../assets/images/img/about.jpg')} />
                </div>
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <h1 className="mb-4">About Us</h1>
                <p className="mb-4">
                Welcome to Landlordly, your all-in-one portal for efficient property management. Designed exclusively for landlords, Landlordly simplifies property management by centralizing all essential information and tasks in one intuitive platform. 
                From rent payment forwacasting to maintenance requests, Landlordly empowers landlords to effortlessly oversee and optimize their properties with ease and confidence..
                </p>
               
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
      </div>
    )
}

export default About
