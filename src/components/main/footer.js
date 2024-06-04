import React from "react";

const Footer = ()=>{
    return(
        <>
        {/* Footer Start */}
        <div
          className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-3 col-md-6">
                <h5 className="text-white mb-4">Get In Touch</h5>
                <p className="mb-2">
                  <i className="fa fa-map-marker-alt me-3" />
                  Plac kaliskiego, Wroclaw, Poland
                </p>
                <p className="mb-2">
                  <i className="fa fa-phone-alt me-3" />
                  +48 435326234
                </p>
                <p className="mb-2">
                  <i className="fa fa-envelope me-3" />
                  info@landlordly.com
                </p>
                <div className="d-flex pt-2">
                  <a className="btn btn-outline-light btn-social" href="">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-outline-light btn-social" href="">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-outline-light btn-social" href="">
                    <i className="fab fa-youtube" />
                  </a>
                  <a className="btn btn-outline-light btn-social" href="">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <h5 className="text-white mb-4">Quick Links</h5>
                <a className="btn btn-link text-white-50" href="">
                  About Us
                </a>
                <a className="btn btn-link text-white-50" href="">
                  Contact Us
                </a>
                <a className="btn btn-link text-white-50" href="">
                  Our Services
                </a>
                <a className="btn btn-link text-white-50" href="">
                  Privacy Policy
                </a>
                <a className="btn btn-link text-white-50" href="">
                  Terms &amp; Condition
                </a>
              </div>
             
              <div className="col-lg-3 col-md-6">
                <h5 className="text-white mb-4">Newsletter</h5>
                <p>#1 for property management.</p>
                <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
                  <input
                    className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                    type="text"
                    placeholder="Your email"
                  />
                  <button
                    type="button"
                    className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                  ©{" "}
                  <a className="border-bottom" href="#">
                   Landlordy
                  </a>
                  made with ❤️ from Pl
                  <a className="border-bottom" href="https://htmlcodex.com">
                    HTML Codex
                  </a>
                </div>
                <div className="col-md-6 text-center text-md-end">
                  <div className="footer-menu">
                    <a href="">Home</a>
                    
                    <a href="">Help</a>
                    <a href="">FQAs</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}
        {/* Back to Top */}
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
          <i className="bi bi-arrow-up" />
        </a>
      </>
      
    )
}

export default Footer
