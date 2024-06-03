import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/main/navbar";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from "axios";
import './style.css';
import base_url from "../../../base_url";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });
  const [user, setUser] = useState(null);
 

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
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
      _formData.append('email', formData.email)
      _formData.append('password', formData.password)
      
      const response = await axios.post(`${base_url}/login`, _formData);
      if (response.status === 200) {
        console.log(response.data);
        alert(response.data.message)
        // You can store the user data in local storage or a global state
        localStorage.setItem('landlord', response.data.user.id);
        window.location = "/landlord"
        
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

  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json'
          }
        })
        .then((res) => {
          const { email, name } = res.data;
          let _formData = new FormData()
          _formData.append("email", email)
          _formData.append("username", name)
          _formData.append("role", "landlord")  // You can change this if needed
          axios.post(`${base_url}/auth0_login`, _formData)
          .then((response) => {
            
            localStorage.setItem("landlord",response.data.user.id)
            
            window.location = "/landlord"
          })
          .catch((error) => {
            
            alert("Login failed");
          });
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

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
                    <p className="text-center">Login to your account</p>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
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




                     
                      <br />
                      <div className="d-flex align-items-center justify-content-center">
                        <Link className="text-primary fw-bold ms-2" to="/register">Create an account</Link>
                      </div>
                    </form>

                    <p style={{ textAlign: 'center' }}>OR</p>
                      <button className="custom-google-signin" onClick={() => login()}>
                        <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google logo" />
                        Sign in with Google
                      </button>
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

export default Login;
