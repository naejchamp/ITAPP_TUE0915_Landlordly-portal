import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './style.css';
import base_url from '../../../base_url';
import { InlineWidget } from "react-calendly";
import Navbar from '../../../components/main/navbar';

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get(`${base_url}/view_property?property_id=${id}`);
        setProperty(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching property:', error);
        setError('Error fetching property');
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!property) return <p>Property not found</p>;

  return (
    <div className="container-xxl bg-white p-0">
      <Navbar />
   
    <div className="row">
      <div className="col-md-8">
        <h1 className="mb-3">{property.title}</h1>
        <p><strong>Type:</strong> {property.property_type}</p>
        <p><strong>Selling Type:</strong> {property.selling_type}</p>
        <div className="row property-images mb-4">
          {property.picture_1 && (
            <div className="col-4">
              <img src={`${base_url}/static/uploads/${property.picture_1}`} alt="Property Image 1" className="img-fluid mb-2" />
            </div>
          )}
          {property.picture_2 && (
            <div className="col-4">
              <img src={`${base_url}/static/uploads/${property.picture_2}`} alt="Property Image 2" className="img-fluid mb-2" />
            </div>
          )}
          {property.picture_3 && (
            <div className="col-4">
              <img src={`${base_url}/static/uploads/${property.picture_3}`} alt="Property Image 3" className="img-fluid mb-2" />
            </div>
          )}
        </div>
        <p><strong>Description:</strong> {property.description}</p>
        <p><strong>Rooms:</strong> {property.no_rooms}</p>
        <p><strong>Washrooms:</strong> {property.no_washrooms}</p>
        <p><strong>Price:</strong> ${property.price}</p>
        <div className='border p-4'>
        <h4>Schedule your meeting</h4>
        <InlineWidget url="https://calendly.com/infolandlordly/30min"  />

       </div>
      </div>


       
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Landlord Information</h4>
            {/* Assuming you have landlord data in the property object */}
            <p><strong>Landlord Name:</strong> {property.landlord_name}</p>
            <p><strong>Landlord Phone number:</strong> {property.landlord_phone_no}</p>
            <p><strong>Landlord Email:</strong> {property.landlord_email}</p>

            {/* Add more landlord details if available */}


          </div>
        </div>
      </div>
    </div>


  </div>
  );
};

export default PropertyDetails;
