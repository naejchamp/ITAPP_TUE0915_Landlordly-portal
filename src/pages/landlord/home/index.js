import { useState, useEffect } from "react";
import Header from "../../../components/landlord/header";
import Sidebar from "../../../components/landlord/sidebar";
import PropertiesTable from "./properties_table";
import AddPropertyForm from "./add_property_form";
import PropertyDetailsModal from "./property_detail_modal";
import axios from 'axios';
import base_url from "../../../base_url";
const landlord = localStorage.getItem('landlord')
const LandlordHome = () => {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = () => {
    
    axios.get(`${base_url}/properties?landlord_id=${landlord}`)
      .then(response => {
        setProperties(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the properties!', error);
      });
  };

  const handlePropertyAdded = (newProperty) => {
    setProperties([...properties, newProperty]);
  };

  const handleDeleteProperty = (propertyId) => {
    axios.delete(`${base_url}/properties/${propertyId}`)
      .then(response => {
        setProperties(properties.filter(property => property.id !== propertyId));
        alert('Property deleted successfully');
      })
      .catch(error => {
        console.error('There was an error deleting the property!', error);
      });
  };

  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
  };

  const handleCloseModal = () => {
    setSelectedProperty(null);
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
          <div className="col-lg-8 d-flex align-items-strech" style={{ width: '100%' }}>
            <div className="card w-100">
              <div className="card-body">
                <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                  <div className="mb-3 mb-sm-0">
                    <h5 className="card-title fw-semibold">Properties</h5>
                  </div>
                  <div>
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add property</button>
                  </div>
                </div>
                <PropertiesTable properties={properties} onPropertyClick={handlePropertyClick} onDeleteProperty={handleDeleteProperty} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal for Adding Property */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Create Property
              </h5>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <AddPropertyForm onPropertyAdded={handlePropertyAdded} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal for Property Details */}
      {selectedProperty && <PropertyDetailsModal property={selectedProperty} onClose={handleCloseModal} />}
    </div>
  );
};

export default LandlordHome;
