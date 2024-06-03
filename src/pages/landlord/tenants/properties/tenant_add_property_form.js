import React, { useState } from 'react';

const TenantAddPropertyForm = ({ properties, tenants, addTenantProperty }) => {
    const [formData, setFormData] = useState({
        propertyId: '',
        tenantId: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const landlord_id = localStorage.getItem('landlord')
        const form = new FormData();
        form.append('property_id', formData.propertyId);
        form.append('tenant_id', formData.tenantId);
        form.append('landlord_id', landlord_id);

        addTenantProperty(form);

        setFormData({
            propertyId: '',
            tenantId: ''
        });
    };

    return (
        <div className="container mt-3">
            <h2>Associate Tenant with Property</h2>
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
                    <label className="form-label">Tenant</label>
                    <select
                        className="form-control"
                        name="tenantId"
                        value={formData.tenantId}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Tenant</option>
                        {tenants.map((tenant) => (
                            <option key={tenant.tenant_id} value={tenant.tenant_id}>
                                {tenant.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Submit</button>
            </form>
        </div>
    );
};

export default TenantAddPropertyForm;
