import React from "react";


const PropertyTypes = ()=>{
    return(
        <>
        {/* Category Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 600 }}
            >
              <h1 className="mb-3">Property Types</h1>
              <p>
                Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
                lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero
                dolor duo.
              </p>
            </div>
            <div className="row g-4">
              <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                <a
                  className="cat-item d-block bg-light text-center rounded p-3"
                  href=""
                >
                  <div className="rounded p-4">
                    <div className="icon mb-3">
                      <img
                        className="img-fluid"
                        src={require('../../../assets/images/img/icon-apartment.png')}
                        alt="Icon"
                      />
                    </div>
                    <h6>Apartment</h6>
                    
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                <a
                  className="cat-item d-block bg-light text-center rounded p-3"
                  href=""
                >
                  <div className="rounded p-4">
                    <div className="icon mb-3">
                      <img
                        className="img-fluid"
                        src={require('../../../assets/images/img/icon-villa.png')}
                        alt="Icon"
                      />
                    </div>
                    <h6>Villa</h6>
                    
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                <a
                  className="cat-item d-block bg-light text-center rounded p-3"
                  href=""
                >
                  <div className="rounded p-4">
                    <div className="icon mb-3">
                      <img
                        className="img-fluid"
                        src={require('../../../assets/images/img/icon-house.png')}
                        alt="Icon"
                      />
                    </div>
                    <h6>Home</h6>
                  
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                <a
                  className="cat-item d-block bg-light text-center rounded p-3"
                  href=""
                >
                  <div className="rounded p-4">
                    <div className="icon mb-3">
                      <img
                        className="img-fluid"
                        src={require('../../../assets/images/img/icon-housing.png')}
                        alt="Icon"
                      />
                    </div>
                    <h6>Office</h6>
                  
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                <a
                  className="cat-item d-block bg-light text-center rounded p-3"
                  href=""
                >
                  <div className="rounded p-4">
                    <div className="icon mb-3">
                      <img
                        className="img-fluid"
                        src={require('../../../assets/images/img/icon-building.png')}
                        alt="Icon"
                      />
                    </div>
                    <h6>Building</h6>
                 
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                <a
                  className="cat-item d-block bg-light text-center rounded p-3"
                  href=""
                >
                  <div className="rounded p-4">
                    <div className="icon mb-3">
                      <img
                        className="img-fluid"
                        src={require('../../../assets/images/img/icon-neighborhood.png')}
                        alt="Icon"
                      />
                    </div>
                    <h6>Townhouse</h6>
                   
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                <a
                  className="cat-item d-block bg-light text-center rounded p-3"
                  href=""
                >
                  <div className="rounded p-4">
                    <div className="icon mb-3">
                      <img
                        className="img-fluid"
                        src={require('../../../assets/images/img/icon-condominium.png')}
                        alt="Icon"
                      />
                    </div>
                    <h6>Shop</h6>
                   
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                <a
                  className="cat-item d-block bg-light text-center rounded p-3"
                  href=""
                >
                  <div className="rounded p-4">
                    <div className="icon mb-3">
                      <img
                        className="img-fluid"
                        src={require('../../../assets/images/img/icon-luxury.png')}
                        alt="Icon"
                      />
                    </div>
                    <h6>Garage</h6>
                   
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Category End */}


        <>
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
          <h1 className="mb-4">#1 Place To Find The Perfect Property</h1>
          <p className="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <p>
            <i className="fa fa-check text-primary me-3" />
            Tempor erat elitr rebum at clita
          </p>
          <p>
            <i className="fa fa-check text-primary me-3" />
            Aliqu diam amet diam et eos
          </p>
          <p>
            <i className="fa fa-check text-primary me-3" />
            Clita duo justo magna dolore erat amet
          </p>
          <a className="btn btn-primary py-3 px-5 mt-3" href="">
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
</>


      </>
      
    )
}

export default PropertyTypes;