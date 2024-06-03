import React, { useState,useEffect } from "react";
import Sidebar from "../../../components/maintainer/sidebar";
import Header from "../../../components/maintainer/header";
import MaintainenceRequestTicketsTable from "./maintainence_tickets_table";
import base_url from "../../../base_url";
import axios from "axios";



const MaintainerTickets = () => {
  const [tickets, setTickets] = useState([]);


  const completeTicket = async (ticketId) => {
    try {
        const maintainerId = localStorage.getItem('maintainer'); // Replace with the actual maintainer ID
        const formData = new FormData();
        formData.append('ticket_id', ticketId);
        formData.append('maintainer_id', maintainerId);
        const response = await axios.post(`${base_url}/complete_ticket`, formData);
        
        // Update the ticket status in the state
        setTickets(tickets.map(ticket =>
            ticket.ticket_id === ticketId ? { ...ticket, status: 'completed' } : ticket
        ));
    } catch (error) {
      console.log(error)
        alert("Failed to complete ticket")
    }
};
  useEffect(() => {
      // Fetch tickets from the API
      const fetchTickets = async () => {
          try {
              const maintainerId = localStorage.getItem('maintainer'); // Replace with the actual maintainer ID
              const response = await axios.get(`${base_url}/get_tickets?maintainer_id=${maintainerId}`);
              
              setTickets(response.data);
          } catch (error) {
              console.error("Error fetching tickets:", error);
          }
      };

      fetchTickets();
  }, []);

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
                                      <h5 className="card-title fw-semibold">Maintainence tickets for you</h5>
                                  </div>
                                  <div></div>
                              </div>

                              <MaintainenceRequestTicketsTable maintenanceRequests={tickets} onCompleteTicket={completeTicket}/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default MaintainerTickets;