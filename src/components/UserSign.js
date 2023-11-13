import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import airLine from "./Images/airLine.jpg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faKey, faFaceSmile } from '@fortawesome/free-solid-svg-icons';

function UserSign({ onLogin }) {
  const API_BASE_URL = "http://localhost:5088/api/Users";
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(API_BASE_URL, formData)
      .then((response) => {
        toast.success("User registered successfully");
        console.log("User registered successfully:", response.data);
        setFormData(response.data);
        onLogin(response.data.username);
      })
      .catch((error) => {
        toast.error("Error registering user:" + error.message);
        console.error("Error registering user:", error);
      })
  };

  return (
    <>
      <ToastContainer />
      <section className="" style={{ backgroundColor: "#eee", height: '50px' }}>
        <div className="container h-50">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div style={{width : '85%', height: '0%'}}>
              <div className="card text-black" style={{ borderRadius: "40px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form className="mx-1 mx-md-2" onSubmit={handleSubmit}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <FontAwesomeIcon icon={faUser} className="fa-lg me-2 fa-fw" style={{ marginBottom: "-27px" }} />
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label">
                              Full Name
                            </label>
                            <input
                              type="text"
                              name="fullname"
                              value={formData.fullname}
                              onChange={handleChange}
                              className="form-control"
                              required
                            />
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <FontAwesomeIcon icon={faUser} className="fa-lg me-2 fa-fw" style={{ marginBottom: "-27px" }}/>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label">
                              user Name 
                            </label>
                            <input
                              type="text"
                              name="username"
                              value={formData.username}
                              onChange={handleChange}
                              class="form-control"
                              required
                            />
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                        <FontAwesomeIcon icon={faEnvelope} className="fa-lg me-3 fa-fw" style={{ marginBottom: "-27px" }} />
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label">
                              Your Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              class="form-control"
                              required
                            />
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                        <FontAwesomeIcon icon={faLock} className="fa-lg me-3 fa-fw" style={{ marginBottom: "-27px" }} />
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label">
                              Password
                            </label>
                            <input
                              type="password"
                              name="password"
                              value={formData.password}
                              onChange={handleChange}
                              class="form-control"
                              required
                            />
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                        <FontAwesomeIcon icon={faKey} className="fa-lg me-3 fa-fw" style={{ marginBottom: "-27px" }} />
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label">
                              Confirm password
                            </label>
                            <input
                              type="password"
                              name="confirmPassword"
                              value={formData.confirmPassword}
                              onChange={handleChange}
                              class="form-control"
                              required
                            />
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                        <FontAwesomeIcon icon={faFaceSmile} className="fa-lg me-3 fa-fw" style={{ marginBottom: "-27px" }} />
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label">
                              Role
                            </label>
                            <input
                              type="text"
                              name="role"
                              value={formData.role}
                              onChange={handleChange}
                              class="form-control"
                            />
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" className="btn btn-primary btn-lg">
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src={airLine} alt="Image1" style={{ width: "524px", height: "340px" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserSign;
