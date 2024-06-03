import React, { useState } from 'react';
import base_url from '../../../base_url';

const AddTenantForm = ({ fetchTenants }) => {
    const [formData, setFormData] = useState({
        name: '',
        idNumber: '',
        email: '',
        phoneNumber: '',
        address: '',
        country: '',
        document: null,
        
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, document: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', formData.name);
        form.append('id_number', formData.idNumber);
        form.append('email', formData.email);
        form.append('phone_no', formData.phoneNumber);
        form.append('address', formData.address);
        form.append('country', formData.country);
        form.append('document', formData.document);
        form.append('landlord_id', localStorage.getItem('landlord'));  // Replace with actual landlord ID

        try {
            await fetch(`${base_url}/tenants`, {
                method: 'POST',
                body: form,
            });
            alert("Tenant added successfully");
            setFormData({
              name: '',
              idNumber: '',
              email: '',
              phoneNumber: '',
              address: '',
              country: '',
              document: null,
              
          });
            fetchTenants();
        } catch (error) {
            alert("Error adding tenant.Please try again")
            console.error("Error adding tenant:", error);
        }

        
    };

    return (
        <div className="container mt-3">
            <h2>Add Tenant</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">ID Number</label>
                    <input type="text" className="form-control" name="idNumber" value={formData.idNumber} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input type="text" className="form-control" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Country</label>
                    <input type="text" className="form-control" name="country" value={formData.country} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Document</label>
                    <input type="file" className="form-control" onChange={handleFileChange} required />
                </div>
                
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Submit</button>
            </form>
        </div>
    );
};

export default AddTenantForm;
