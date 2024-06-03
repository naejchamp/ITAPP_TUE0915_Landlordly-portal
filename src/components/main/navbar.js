import React from "react";
import { Link } from "react-router-dom";


const Navbar = ()=>{
    return(
        <>
        {/* Navbar Start */}
        <div className="container-fluid nav-bar bg-transparent">
          <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
            <Link
              to="/"
              className="navbar-brand d-flex align-items-center text-center"
            >
              <div >
                <img
                  className="img-fluid"
                  src={require('../../assets/images/logos/favicon.png')}
                  alt="Icon"
                  style={{ height: 80 }}
                />
              </div>
             
            </Link>
            <button
              type="button"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto">
                <Link to="/" className="nav-item nav-link active">
                  Home
                </Link>
                <Link to="/about" className="nav-item nav-link">
                  About
                </Link>
               
                <Link to="/properties" className="nav-item nav-link">
                  Property
                </Link>


                <Link to="/contact_us" className="nav-item nav-link">
                  Contact
                </Link>

                {localStorage.getItem('landlord')?  <button onClick={()=>{
                  if(localStorage.getItem('landlord')){
                    localStorage.removeItem('landlord')
                    window.location = "/login"
                  }

                
                }} className="btn btn-danger" style={{height:50,marginTop:10}}>
                  Logout
                </button>: <Link to="/login" className="nav-item nav-link">
                  Login
                </Link>}

               
              </div>
             
            </div>
          </nav>
        </div>
        {/* Navbar End */}
      </>
      
    )
}


export default Navbar;