import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Booking() {
  const location = useLocation();
  const flightId = new URLSearchParams(location.search).get('flightId');
  const price = new URLSearchParams(location.search).get('price');

  const API_BASE_URL = 'http://localhost:5088/api/Bookings';

  const [formData, setFormData] = useState({
    userid: '',
    flightid: flightId, 
    noOfPassengers: '',
    status: '',
    price: price,
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
    axios
      .post(API_BASE_URL, formData)
      .then((response) => {
        toast.success('Booking created successfully');
        console.log('Booking created successfully:', response.data);
        setFormData(response.data);
      })
      .catch((error) => {
        toast.error('Error creating booking:', error);
        console.error('Error creating booking:', error);
      });
  };

  return (
    <div>
      <ToastContainer />
      <section className="vh-100" style={{ backgroundColor: '#eee' }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: '40px' }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Booking Form
                      </p>

                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                        <div className="mb-4">
                          <label className="form-label">User ID</label>
                          <input
                            type="text"
                            name="userid"
                            value={formData.userid}
                            onChange={handleChange}
                            className="form-control"
                            required
                          />
                        </div>

                        <div className="mb-4">
                          <label className="form-label">Flight ID</label>
                          <input
                            type="number"
                            name="flightid"
                            value={formData.flightid}
                            onChange={handleChange}
                            className="form-control"
                            required
                            disabled // Disabled to prevent user modification
                          />
                        </div>

                        <div className="mb-4">
                          <label className="form-label">Number of Passengers</label>
                          <input
                            type="number"
                            name="noOfPassengers"
                            value={formData.noOfPassengers}
                            onChange={handleChange}
                            className="form-control"
                            required
                          />
                        </div>

                        <div className="mb-4">
                          <label className="form-label">Status</label>
                          <input
                            type="text"
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="form-control"
                            required
                          />
                        </div>

                        <div className="mb-4">
                          <label className="form-label">Price</label>
                          <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="form-control"
                            required
                            disabled
                          />
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" className="btn btn-primary btn-lg">
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      {/* Your image here */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Booking;