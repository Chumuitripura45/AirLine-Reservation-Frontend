import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import airImage from './Images/airAbout.jpg'

function Footer() {
  return (
    <footer className="bg-white border-top">
      <div className="container py-6">
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <Link to="/" className="d-flex align-items-center">
              <img
                src={airImage}
                className="mr-3 h-16"
                alt="Logo"
                style={{width : '25%', borderRadius : '10px'}}
              />
            </Link>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4">
                <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                <ul className="list-unstyled text-gray-500 font-medium">
                  <li className="mb-2">
                    <Link to="/" className="text-reset text-decoration-none">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-reset text-decoration-none">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                <ul className="list-unstyled text-gray-500 font-medium">
                  <li className="mb-2">
                    <a
                      href="https://github.com/chulbulsingh27"
                      className="text-reset text-decoration-none"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                      <Link to="/" className="text-reset text-decoration-none">
                          LinkedIn
                      </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                <ul className="list-unstyled text-gray-500 font-medium">
                  <li className="mb-2">
                    <Link to="#" className="text-reset text-decoration-none">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-reset text-decoration-none">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200" />
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-4 text-center text-md-left">
            <span className="text-sm text-gray-500">
              © 2023{' '}
              <a href="https://github.com/Chumuitripura45/" className="text-reset text-decoration-none">
                AirLine Reservation 
              </a>
              . All Rights Reserved.
            </span>
          </div>
          <div className="col-md-6 text-center">
            <div className="d-flex justify-content-center justify-content-md-end">
              <Link to="#" className="text-gray-500 mr-3">
                <i className="bi bi-facebook"></i>
              </Link>
              <Link to="#" className="text-gray-500 mr-3">
                <i className="bi bi-twitter"></i>
              </Link>
              <Link to="#" className="text-gray-500 mr-3">
                <i className="bi bi-github"></i>
              </Link>
              <Link to="#" className="text-gray-500">
                <i className="bi bi-dribbble"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
