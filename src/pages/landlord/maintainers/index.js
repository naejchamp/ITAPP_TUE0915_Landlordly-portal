import React, { useState, useEffect } from "react";
import MaintainersTable from "./maintainers_table";
import Header from "../../../components/landlord/header";
import Sidebar from "../../../components/landlord/sidebar";
import AddMaintainerForm from "./add_maintainer_form";
import base_url from "../../../base_url";

const LandlordMaintainers = () => {
  const [maintainers, setMaintainers] = useState([]);

  useEffect(() => {
    fetchMaintainers();
  }, []);

  const fetchMaintainers = async () => {
    try {
      const response = await fetch(`${base_url}/maintainers`);
      const data = await response.json();
      setMaintainers(data);
    } catch (error) {
      console.error("Error fetching maintainers:", error);
    }
  };

  const addMaintainer = async (newMaintainer) => {
    try {
      const response = await fetch(`${base_url}/maintainers`, {
        method: 'POST',
        body: newMaintainer,
      });
      const data = await response.json();
      setMaintainers([...maintainers, data]);
      alert("Maintainer Added successfully")
    } catch (error) {
       alert("Failed to add maintainer.Please try again")
    }
  };

  const deleteMaintainer = async (id) => {
    try {
      await fetch(`${base_url}/maintainers/${id}`, { method: 'DELETE' });
      setMaintainers(maintainers.filter(maintainer => maintainer.id !== id));
    } catch (error) {
      console.error("Error deleting maintainer:", error);
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
                    <h5 className="card-title fw-semibold">Maintainers</h5>
                  </div>
                  <div>
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Maintainer</button>
                  </div>
                </div>
                <MaintainersTable maintainers={maintainers} deleteMaintainer={deleteMaintainer} />
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
              <h5 className="modal-title" id="exampleModalLabel">Create Maintainer</h5>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <AddMaintainerForm addMaintainer={addMaintainer} />
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

export default LandlordMaintainers;
