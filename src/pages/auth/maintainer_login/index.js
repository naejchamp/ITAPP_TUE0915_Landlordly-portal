import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Navbar from "../../../components/main/navbar";
import axios from "axios";
import './style.css';
import base_url from "../../../base_url";

const MaintainerLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    remember: false,
  });
 

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let _formData = new FormData();
      _formData.append("username",formData.username)
      _formData.append("password",formData.password)
      const response = await axios.post(`${base_url}/maintainer/login`, _formData);
      if (response.status === 200) {
        localStorage.setItem("maintainer",response.data.user.id)
        alert("Logged in successfully")
        window.location = "/maintainer/tickets"
       
      }
    } catch (error) {
      if(error && error.response.data){
        alert(error.response.data.message);

      }else{
        console.log(error)
        alert("Something went wrong.")
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div
        className="page-wrapper"
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin6"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
          <div className="d-flex align-items-center justify-content-center w-100">
            <div className="row justify-content-center w-100">
              <div className="col-md-8 col-lg-6 col-xxl-3">
                <div className="card mb-0">
                  <div className="card-body">
                    <p className="text-center">Login to your maintainer account</p>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2"
                      >
                        Login
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintainerLogin;
