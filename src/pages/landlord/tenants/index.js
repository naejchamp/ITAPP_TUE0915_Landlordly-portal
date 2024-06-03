import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/landlord/sidebar";
import Header from "../../../components/landlord/header";
import AddTenantForm from "./add_tenant_form";
import TenantTable from "./tenant_table";
import base_url from "../../../base_url";

const LandlordTenants = () => {
    const [tenants, setTenants] = useState([]);

    useEffect(() => {
        fetchTenants();
    }, []);

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

    const deleteTenant = async (id) => {
        try {
           
            await fetch(`${base_url}/tenants/${id}`, { method: 'DELETE' });
            setTenants(tenants.filter(tenant => tenant.tenant_id !== id));
        } catch (error) {
            alert("Failed to delete tenant")
        }
    };

    return (
        <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
            <Sidebar />
            <div className="body-wrapper">
                <Header />
                <div className="container-fluid">
                    <div className="col-lg-8 d-flex align-items-stretch" style={{ width: '100%' }}>
                        <div className="card w-100">
                            <div className="card-body">
                                <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                                    <div className="mb-3 mb-sm-0">
                                        <h5 className="card-title fw-semibold">Tenants</h5>
                                    </div>
                                    <div>
                                        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Tenant</button>
                                    </div>
                                </div>
                                <TenantTable tenants={tenants} deleteTenant={deleteTenant} />
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
                            <h5 className="modal-title" id="exampleModalLabel">Create Tenant</h5>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <AddTenantForm fetchTenants={fetchTenants} />
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

export default LandlordTenants;
