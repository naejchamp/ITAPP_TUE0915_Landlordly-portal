import React from 'react';

const PropertiesTable = ({ properties, onPropertyClick,onDeleteProperty }) => {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
          <th>ID</th>

            <th>Title</th>
            <th>Type</th>
            <th>Rooms</th>
            <th>Washrooms</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property.id} onClick={() => onPropertyClick(property)}>
              <td style={{cursor:'pointer'}}>{property.id}</td>

              <td style={{cursor:'pointer'}}>{property.title}</td>
              <td>{property.property_type}</td>
              <td>{property.no_rooms}</td>
              <td>{property.no_washrooms}</td>
              <td>{property.price}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteProperty(property.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertiesTable;
