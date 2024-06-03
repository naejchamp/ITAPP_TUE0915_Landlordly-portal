import React from "react";
import Navbar from "../../../components/main/navbar";
import Header from "../../../components/main/landing/header";
import PropertyTypes from "../../../components/main/landing/property_types";
import Footer from "../../../components/main/footer";
import PropertyListings from "../../../components/main/landing/property_listings";
import Contact from "../../../components/main/landing/contact";


const Landing = ()=>{
    return(
        <div class="container-xxl bg-white p-0">
            <Navbar />

            <Header />

            <PropertyTypes />

            <PropertyListings />


            <Contact />
            <Footer />
        </div>
    )
}

export default Landing