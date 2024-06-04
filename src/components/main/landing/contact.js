import React from "react";

const Contact = ()=>{
    return(
        <>
        {/* Call to Action Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="bg-light rounded p-3">
              <div
                className="bg-white rounded p-4"
                style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
              >
                <div className="row g-5 align-items-center">
                  <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <img
                      className="img-fluid rounded w-100"
                      src={require('../../../assets/images/img/call-to-action.jpg')}
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <div className="mb-4">
                      <h1 className="mb-3">Contact with us</h1>
                      <p>
                        Get in touch with us today and let's connect! 
                        Whether you have questions, feedback, or simply want to say hello, our team is here to help.
                      </p>
                    </div>
                  
                    <a href="" className="btn btn-dark py-3 px-4">
                      <i className="fa fa-phone me-2" />
                     Contact us 
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Call to Action End */}
      </>
      
    )
}

export default Contact;
