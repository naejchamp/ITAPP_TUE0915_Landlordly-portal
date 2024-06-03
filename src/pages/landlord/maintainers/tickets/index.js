import React, { useState, useEffect } from "react";
import Sidebar from "../../../../components/landlord/sidebar";
import Header from "../../../../components/landlord/header";
import MaintainenceRequestTicketsTable from "./tickets_table";
import MaintenanceRequestForm from "./maintainence_request_form";
import base_url from "../../../../base_url";
const landlord = localStorage.getItem('landlord')
const LandlordMaintainerTickets = () => {
    const [tickets, setTickets] = useState([]);
    const [maintainers, setMaintainers] = useState([]);
    const [properties, setProperties] = useState([]);

    const fetchTickets = ()=>{
        fetch(`${base_url}/maintenance_tickets?landlord_id=${landlord}`)  // Assuming landlord_id is 1 for now
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setTickets(data)
        })
        .catch(error => console.error('Error fetching maintenance tickets:', error));
    }
    useEffect(() => {
        fetchTickets()
       
    }, []);


    useEffect(() => {
      fetch(`${base_url}/maintainers`)
          .then(response => response.json())
          .then(data => setMaintainers(data))
          .catch(error => console.error('Error fetching maintainers:', error));
  }, []);

  useEffect(() => {
      fetch(`${base_url}/properties?landlord_id=${landlord}`)
          .then(response => response.json())
          .then(data => setProperties(data))
          .catch(error => console.error('Error fetching properties:', error));
  }, []);
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
                                        <h5 className="card-title fw-semibold">Maintenance Tickets</h5>
                                    </div>
                                    <div>
                                        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add+</button>
                                    </div>
                                </div>
                                <MaintainenceRequestTicketsTable maintenanceRequests={tickets} fetchTickets={fetchTickets}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create Maintenance Request</h5>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <MaintenanceRequestForm fetchtickets={fetchTickets} maintainers={maintainers} properties={properties}/>
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

export default LandlordMaintainerTickets;
