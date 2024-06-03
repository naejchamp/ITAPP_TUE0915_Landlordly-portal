import React, { useState, useEffect } from "react";
import Sidebar from "../../../../components/landlord/sidebar";
import Header from "../../../../components/landlord/header";
import TenantAddPropertyForm from "./tenant_add_property_form";
import TenantPropertiesTable from "./tenant_properties_table";
import base_url from "../../../../base_url";
const landlord = localStorage.getItem('landlord');
const TenantProperties = () => {
    const [tenantProperties, setTenantProperties] = useState([]);
    const [tenants, setTenants] = useState([]);
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetchTenantProperties();
        fetchTenants();
        fetchProperties();
    }, []);

    const fetchTenantProperties = async () => {
        try {
            const landlord_id = localStorage.getItem('landlord')
            const response = await fetch(`${base_url}/tenant_assigned_properties?landlord_id=${landlord_id}`);
            const data = await response.json();
            console.log(data)
            setTenantProperties(data);
        } catch (error) {
            console.error("Error fetching tenant properties:", error);
        }
    };

    const fetchTenants = async () => {
        try {
            const landlord_id = localStorage.getItem('landlord');
            const response = await fetch(`${base_url}/tenants?landlord_id=${landlord_id}`);
            const data = await response.json();
            setTenants(data);
        } catch (error) {
            console.error("Error fetching tenants:", error);
        }
    };

    const fetchProperties = async () => {
        try {
            const response = await fetch(`${base_url}/properties?landlord_id=${landlord}`);
            const data = await response.json();
            setProperties(data);
        } catch (error) {
            console.error("Error fetching properties:", error);
        }
    };

    const addTenantProperty = async (formData) => {
        try {
            await fetch(`${base_url}/tenant_assigned_properties`, {
                method: 'POST',
                body: formData,
            });
            fetchTenantProperties();
            alert("Property assigned to tenant successfully")
        } catch (error) {
           alert("Something went wrong.Please try again")
        }
    };

    const deleteTenantProperty = async (id) => {
        try {
            await fetch(`${base_url}/tenant_assigned_properties/${id}`, { method: 'DELETE' });
            fetchTenantProperties();
        } catch (error) {
            console.error("Error deleting tenant property:", error);
        }
    };

    return (
        <div
            className="page-wrapper"
            id="main-wrapper"
            data-layout="vertical"
            data-navbarbg="skin6"
            data-sidebartype="full"
            data-sidebar-position="fixed"
            data-header-position="fixed"
        >
            <Sidebar />
            <div className="body-wrapper">
                <Header />
                <div className="container-fluid">
                    <div className="col-lg-8 d-flex align-items-stretch" style={{ width: '100%' }}>
                        <div className="card w-100">
                            <div className="card-body">
                                <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                                    <div className="mb-3 mb-sm-0">
                                        <h5 className="card-title fw-semibold">Tenant Properties</h5>
                                    </div>
                                    <div>
                                        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add tenant property</button>
                                    </div>
                                </div>
                                <TenantPropertiesTable tenantProperties={tenantProperties} deleteTenantProperty={deleteTenantProperty} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Associate Tenant with Property</h5>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <TenantAddPropertyForm tenants={tenants} properties={properties} addTenantProperty={addTenantProperty} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TenantProperties;
