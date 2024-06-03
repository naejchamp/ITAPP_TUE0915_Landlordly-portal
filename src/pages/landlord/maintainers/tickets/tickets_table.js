import React from "react";
import base_url from "../../../../base_url";

const MaintainenceRequestTicketsTable = ({ maintenanceRequests, setTickets }) => {
  const handleDelete = (ticketId) => {
    fetch(`${base_url}/maintenance_tickets/${ticketId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(() => {
        setTickets(prevTickets => prevTickets.filter(ticket => ticket.ticketId !== ticketId));
      })
      .catch(error =>{
        alert("Failed to delete ticket.Please try again")
      });
  };

  

  return (
    <div className="container mt-3">
      <h2>Maintenance Requests</h2>
      {maintenanceRequests.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Ticket ID</th>
              <th>Property</th>
            
              <th>Issue</th>
              <th>Details</th>
              <th>Status</th>
              <th>Maintainer</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {maintenanceRequests.map((request, index) => (
              <tr key={index}>
                <td>{request.ticket_id}</td>
                <td>{request.property_title}</td>
              
                <td>{request.issue}</td>
                <td>{request.detail}</td>
                <td>{request.status}</td>
                <td>{request.maintainer_id}</td>
                <td>
                  
                  <button className="btn btn-danger" onClick={() => handleDelete(request.ticket_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No maintenance requests added yet.</p>
      )}
    </div>
  );
};

export default MaintainenceRequestTicketsTable;
