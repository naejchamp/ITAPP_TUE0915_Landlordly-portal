import React from "react";

const MaintainenceRequestTicketsTable = ({ maintenanceRequests,onCompleteTicket }) => {
    return (
        <div className="container mt-3">
            {maintenanceRequests.length > 0 ? (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Ticket ID</th>
                            <th>Property</th>
                            <th>Property Id</th>
                           
                            <th>Issue</th>
                            <th>Details</th>
                            
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {maintenanceRequests.map((request, index) => (
                            <tr key={index}>
                                <td>{request.ticket_id}</td>
                                <td>{request.property_title}</td>
                                <td>{request.property_id}</td>
                               
                                <td>{request.issue}</td>
                                <td>{request.detail}</td>
                                
                                <td>{request.status}</td>
                                <td>
                                    <button
                                        className="btn btn-success"
                                        onClick={() => onCompleteTicket(request.ticket_id)}
                                        disabled={request.status === 'completed'}
                                    >
                                        Complete
                                    </button>
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
