import React from "react";

const MaintainersTable = ({ maintainers, deleteMaintainer }) => {
  return (
    <div className="container mt-3">
      <h2>Maintainers</h2>
      {maintainers.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
            <th>ID</th>

              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Service</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {maintainers.map((maintainer, index) => (
              <tr key={index}>
                <td>{maintainer.id}</td>

                <td>{maintainer.username}</td>
                <td>{maintainer.email}</td>
                <td>{maintainer.phone_no}</td>
                <td>{maintainer.service}</td>
                <td>
                  
                  <button className="btn btn-danger" onClick={() => deleteMaintainer(maintainer.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No maintainers added yet.</p>
      )}
    </div>
  );
};

export default MaintainersTable;
