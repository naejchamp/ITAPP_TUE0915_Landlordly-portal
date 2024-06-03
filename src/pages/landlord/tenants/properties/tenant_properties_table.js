import React from "react";

const TenantPropertiesTable = ({ tenantProperties, deleteTenantProperty }) => {
    return (
        <div className="container mt-3">
            <h2>Tenant Properties</h2>
            {tenantProperties.length > 0 ? (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Tenant</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tenantProperties.map((tenantProperty) => (
                            <tr key={tenantProperty.tenant_as_id}>
                                <td>{tenantProperty.property_title}</td>
                                <td>{tenantProperty.tenant_name}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => deleteTenantProperty(tenantProperty.tenant_as_id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No tenant properties added yet.</p>
            )}
        </div>
    );
};

export default TenantPropertiesTable;
