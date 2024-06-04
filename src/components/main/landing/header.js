import React from "react";


const Header = ()=>{
    return(
        <>
  {/* Header Start */}
  <div className="container-fluid header bg-white p-0 mt-5">
    <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
      <div className="col-md-6 p-5 mt-lg-5">
        <h1 className="display-5 animated fadeIn mb-4">
          Find A <span className="text-primary">Perfect Home</span> To Live With
          Your Family
        </h1>
        <p className="animated fadeIn mb-4 pb-2">
          Discover your dream home sweet home with us. Explore our platform filled with cozy retreats, charming abodes, and enchanting spaces.
        </p>
        <a href="" className="btn btn-primary py-3 px-5 me-3 animated fadeIn">
          Get Started
        </a>
      </div>
      
      <div className="col-md-6 ">
        
        <div className=" header-carousel">
          <div className="owl-carousel-item">
            <img className="img-fluid" src={require('../../../assets/images/img/carousel-1.jpg')} alt="" style={{borderRadius:5}} />
          </div>
        
        </div>
      </div>
    </div>
  </div>
  {/* Header End */}






</>

    )
}


export default Header;
