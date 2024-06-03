import React, { useState } from 'react';
import axios from 'axios';
import base_url from '../../../base_url';

const AddPropertyForm = ({ onPropertyAdded }) => {
  const [formData, setFormData] = useState({
    title: '',
    property_type: '',
    selling_type: '',
    description: '',
    no_rooms: '',
    no_washrooms: '',
    price: '',
    pictures: []
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'pictures') {
      setFormData({
        ...formData,
        pictures: [...files]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    const landlord = localStorage.getItem('landlord')
    data.append('landlord_id',landlord)
    data.append('title', formData.title);
    data.append('property_type', formData.property_type);
    data.append('selling_type', formData.selling_type);
    data.append('description', formData.description);
    data.append('no_rooms', formData.no_rooms);
    data.append('no_washrooms', formData.no_washrooms);
    data.append('price', formData.price);
    formData.pictures.forEach((file, index) => {
      data.append(`picture_${index + 1}`, file);
    });

    axios.post(`${base_url}/properties`, data)
      .then(response => {
        onPropertyAdded(response.data);
        setFormData({
          title: '',
          property_type: '',
          selling_type: '',
          description: '',
          no_rooms: '',
          no_washrooms: '',
          price: '',
          pictures: []
        });
        alert('Property added successfully');
      })
      .catch(error => {
        console.log(error)
        alert("Failed to add property.Please try again")
      });
  };

  return (
    <div className="container mt-3">
    <h2>Add Property</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          className="form-control"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="property_type" className="form-label">Property Type</label>
        <select
          id="property_type"
          name="property_type"
          className="form-select"
          value={formData.property_type}
          onChange={handleChange}
          required
        >
          <option value="">Select Property Type</option>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
          <option value="Villa">Villa</option>
          <option value="Condo">Condo</option>
          <option value="Cabin">Cabin</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="selling_type" className="form-label">Selling Type</label>
        <select
          id="selling_type"
          name="selling_type"
          className="form-select"
          value={formData.selling_type}
          onChange={handleChange}
          required
        >
          <option value="">Select Selling Type</option>
          <option value="For Sale">For Sale</option>
          <option value="For Rent">For Rent</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea
          id="description"
          name="description"
          className="form-control"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="no_rooms" className="form-label">Number of Rooms</label>
        <input
          type="number"
          id="no_rooms"
          name="no_rooms"
          className="form-control"
          value={formData.no_rooms}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="no_washrooms" className="form-label">Number of Washrooms</label>
        <input
          type="number"
          id="no_washrooms"
          name="no_washrooms"
          className="form-control"
          value={formData.no_washrooms}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">Price $</label>
        <input
          type="number"
          id="price"
          name="price"
          className="form-control"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="pictures" className="form-label">Pictures</label>
        <input
          type="file"
          id="pictures"
          name="pictures"
          className="form-control"
          onChange={handleChange}
          multiple
          required
        />
      </div>
      <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Submit</button>
    </form>
  </div>
  );
};

export default AddPropertyForm;
