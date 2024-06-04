import React from "react";
import Navbar from "../../../components/main/navbar";

const ContactUs = ()=>{
    return(
        <div class="container-xxl bg-white p-0">
        <Navbar />

        
  {/* Contact Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div
        className="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 600 }}
      >
        <h1 className="mb-3">Contact Us</h1>
        
      </div>
      <div className="row g-4">
        <div className="col-12">
          <div className="row gy-4">
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div className="bg-light rounded p-3">
                <div
                  className="d-flex align-items-center bg-white rounded p-3"
                  style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                >
                  <div className="icon me-3" style={{ width: 45, height: 45 }}>
                    <i className="fa fa-map-marker-alt text-primary" />
                  </div>
                  <span>Plac kaliskiego, Wroclaw, Poland</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
              <div className="bg-light rounded p-3">
                <div
                  className="d-flex align-items-center bg-white rounded p-3"
                  style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                >
                  <div className="icon me-3" style={{ width: 45, height: 45 }}>
                    <i className="fa fa-envelope-open text-primary" />
                  </div>
                  <span>info@landlordly.com</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
              <div className="bg-light rounded p-3">
                <div
                  className="d-flex align-items-center bg-white rounded p-3"
                  style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                >
                  <div className="icon me-3" style={{ width: 45, height: 45 }}>
                    <i className="fa fa-phone-alt text-primary" />
                  </div>
                  <span>+48 435326234</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="">
          <div className="wow fadeInUp" data-wow-delay="0.5s">
            <p className="mb-4">
              drop us an email and we will get back to you.
            </p>
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                    />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      style={{ height: 150 }}
                      defaultValue={""}
                    />
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
</div>

    )
}

export default ContactUs
