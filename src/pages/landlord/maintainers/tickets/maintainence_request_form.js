import React, { useState } from 'react';
import base_url from '../../../../base_url';

const MaintenanceRequestForm = ({ fetchtickets, properties, maintainers }) => {
  const [formData, setFormData] = useState({
    propertyId: '',
    
    issue: '',
    details: '',
    maintainerId: '',
    status:'pending',
    landlord_id:localStorage.getItem('landlord')
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FormData: ",formData)
    fetch(`${base_url}/maintenance_tickets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(newTicket => {
      fetchtickets()
      setFormData({
        propertyId: '',
       
        issue: '',
        details: '',
        maintainerId: ''
      });
      alert("Ticket created successfully")
    })
    .catch(error => {
      alert("Something went wrong.Please try again")
    });

   
  };

  return (
    <div className="container mt-3">
      <h2>Create Maintenance Request</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Property</label>
          <select
            className="form-control"
            name="propertyId"
            value={formData.propertyId}
            onChange={handleChange}
            required
          >
            <option value="">Select Property</option>
            {properties.map((property) => (
              <option key={property.id} value={property.id}>
                {property.title}
              </option>
            ))}
          </select>
        </div>
       
        <div className="mb-3">
          <label className="form-label">Issue</label>
          <input
            className="form-control"
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            required
          />
           
        
        </div>
        <div className="mb-3">
          <label className="form-label">Maintainer</label>
          <select
            className="form-control"
            name="maintainerId"
            value={formData.maintainerId}
            onChange={handleChange}
            required
          >
            <option value="">Select Maintainer</option>
            {maintainers.map((maintainer) => (
              <option key={maintainer.id} value={maintainer.id}>
                {maintainer.username}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Details</label>
          <textarea
            className="form-control"
            name="details"
            value={formData.details}
            onChange={handleChange}
            rows="3"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default MaintenanceRequestForm;
