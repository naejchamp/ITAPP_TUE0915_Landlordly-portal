import React, { useEffect } from 'react';
import base_url from '../../../base_url';

const PropertyDetailsModal = ({ property, onClose }) => {

 useEffect(()=>{
    console.log(property)
 },[])
  if (!property) return null;

  return (
    <div
      className="modal fade show"
      tabIndex={-1}
      style={{ display: 'block' }}
      aria-labelledby="propertyDetailsModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="propertyDetailsModalLabel">
              Property Details
            </h5>
            <button type="button" className="btn-close" onClick={onClose} />
          </div>
          <div className="modal-body">
            <h5>{property.title}</h5>
            <p>Type: {property.property_type}</p>
            <p>Selling Type: {property.selling_type}</p>
            <p>Description: {property.description}</p>
            <p>Number of Rooms: {property.no_rooms}</p>
            <p>Number of Washrooms: {property.no_washrooms}</p>
            <p>Price: {property.price}</p>
            <div>
              <h6>Images:</h6>
              
              {property.picture_1?<img  src={`${base_url}/static/uploads/${property.picture_1}`}  style={{ width:250,height:230 }} />:null}
              {property.picture_2?<img  src={`${base_url}/static/uploads/${property.picture_2}`}  style={{ width:250,height:230 }} />:null}
              {property.picture_3?<img  src={`${base_url}/static/uploads/${property.picture_3}`}  style={{ width:250,height:230 }} />:null}

           
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsModal;
