import React, { useEffect, useState } from "react";
import Navbar from "../../../components/main/navbar";
import base_url from "../../../base_url";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [title, setTitle] = useState("");
  const [sellingType, setSellingType] = useState("");
  const [propertyType,setPropertyType] = useState("")
  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await fetch(`${base_url}/get_all_properties`);
      const data = await response.json();
      setProperties(data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  const handleSearch = async () => {
    try {
      const query = new URLSearchParams();
      if (title) query.append("title", title);
      if (sellingType) query.append("selling_type", sellingType);
      if(propertyType) query.append("property_type", propertyType);
      const response = await fetch(`${base_url}/search_properties?${query.toString()}`);
      const data = await response.json();
      setProperties(data);
    } catch (error) {
      console.error("Error searching properties:", error);
    }
  };

  return (
    <div className="container-xxl bg-white p-0">
      <Navbar />
      <div className="container-fluid bg-primary mb-5 wow fadeIn mt-5" data-wow-delay="0.1s" style={{ padding: 35 }}>
        <div className="container">
          <div className="row g-2">
            <div className="col-md-10">
              <div className="row g-2">
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control border-0 py-3"
                    placeholder="Search Keyword"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="col-md-4">
                  <select
                    className="form-select border-0 py-3"
                    value={sellingType}
                    onChange={(e) => setSellingType(e.target.value)}
                  >
                    <option value="">Rent or Sale?</option>
                    <option value="For Sale">For Sale</option>
                    <option value="For Rent">For Rent</option>
                  </select>
                </div>


                <div className="col-md-4">
                  <select
                    className="form-select border-0 py-3"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                  >
                    <option value="">Property Type</option>
                    <option value="Apartment">Apartment</option>
                    <option value="House">House</option>
                    <option value="Villa">Villa</option>
                    <option value="Condo">Condo</option>
                    <option value="Cabin">Cabin</option>
                  </select>
                </div>



              </div>
            </div>
            <div className="col-md-2">
              <button className="btn btn-dark border-0 w-100 py-3" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-0 gx-5 align-items-end">
            <div className="col-lg-6">
              <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                <h1 className="mb-3">Property Listing</h1>
                <p>
                  These are all the properties we got for you
                </p>
              </div>
            </div>
          </div>
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                {properties.map((property) => (
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={property.id}>
                    <div className="property-item rounded overflow-hidden">
                      <div className="position-relative overflow-hidden">
                        <a href={`/properties/${property.id}`}>
                          <img className="img-fluid" src={`${base_url}/application/static/uploads/${property.picture_1}`} alt="" />
                        </a>
                        <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                          {property.selling_type}
                        </div>
                        <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                          {property.property_type}
                        </div>
                      </div>
                      <div className="p-4 pb-0">
                        <h5 className="text-primary mb-3">${property.price}</h5>
                        <a className="d-block h5 mb-2" href={`/properties/${property.id}`}>
                          {property.title}
                        </a>
                       
                      </div>
                      <div className="d-flex border-top">
                       
                        <small className="flex-fill text-center border-end py-2">
                          <i className="fa fa-bed text-primary me-2" />
                          {property.no_rooms} Bed
                        </small>
                        <small className="flex-fill text-center py-2">
                          <i className="fa fa-bath text-primary me-2" />
                          {property.no_washrooms} Bath
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
