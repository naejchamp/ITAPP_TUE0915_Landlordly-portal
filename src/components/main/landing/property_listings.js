import React, { useEffect, useState } from 'react';
import axios from 'axios';
import base_url from '../../../base_url';

const PropertyListings = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(`${base_url}/fetch_8_properties`);
        console.log(response)
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-0 gx-5 align-items-end">
            <div className="col-lg-6">
              <div
                className="text-start mx-auto mb-5 wow slideInLeft"
                data-wow-delay="0.1s"
              >
                <h1 className="mb-3">Property Listing</h1>
                <p>
                  Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
                  dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 text-start text-lg-end wow slideInRight"
              data-wow-delay="0.1s"
            ></div>
          </div>
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                {properties.map((property) => (
                  <div
                    className="col-lg-4 col-md-6 wow fadeInUp"
                    data-wow-delay="0.1s"
                    key={property.id}
                  >
                    <div className="property-item rounded overflow-hidden">
                      <div className="position-relative overflow-hidden">
                        <a href={`/properties/${property.id}`}>
                          <img
                            className="img-fluid"
                            src={`${base_url}/static/uploads/${property.picture_1}`}
                            alt=""
                          />
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
                          <i className="fa fa-bed text-primary me-2" />{property.no_rooms} Bed
                        </small>
                        <small className="flex-fill text-center py-2">
                          <i className="fa fa-bath text-primary me-2" />{property.no_washrooms} Bath
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                  <a className="btn btn-primary py-3 px-5" href='/properties'>
                    Browse More Property
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyListings;
