import React from "react";
import base_url from "../../../base_url";

const TenantTable = ({ tenants, deleteTenant }) => {
    return (
        <div className="container mt-3">
            <h2>Tenants</h2>
            {tenants.length > 0 ? (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>ID Number</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                            <th>Country</th>
                            <th>Document</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tenants.map((tenant) => (
                            <tr key={tenant.id}>
                                <td>{tenant.name}</td>
                                <td>{tenant.id_number}</td>
                                <td>{tenant.email}</td>
                                <td>{tenant.phone_no}</td>
                                <td>{tenant.address}</td>
                                <td>{tenant.country}</td>
                                <td>{tenant.document ? <a href={`${base_url}/static/uploads/${tenant.document}`}>Document</a> : 'No document'}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => deleteTenant(tenant.tenant_id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No tenants added yet.</p>
            )}
        </div>
    );
};

export default TenantTable;
