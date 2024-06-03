import React, { useState } from "react";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: 'password123',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you can add your logic to update the user profile, such as an API call
    setIsEditing(false);
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
      <div
        className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center"
      >
        <div className="d-flex align-items-center justify-content-center w-100">
          <div className="row justify-content-center w-100">
            <div className="col-md-8 col-lg-6 col-xxl-3">
              <div className="card mb-0">
                <div className="card-body">
                  
                 
                  {isEditing ? (
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          aria-describedby="textHelp"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          aria-describedby="emailHelp"
                          readOnly // Disable editing email
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
                      <button type="submit" className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">Save Changes</button>
                    </form>
                  ) : (
                    <div>
                      <p>Name: {formData.name}</p>
                      <p>Email: {formData.email}</p>
                      <button onClick={() => setIsEditing(true)} className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">Edit Profile</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
