import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CssAll/HeaderStyle.css";
import airLine from "./Images/airLine.jpg";

const Header = () => {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="container-fluid">
          <img src={airLine} className="imagePart" alt="Logo" />
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav flightlink">
              <li className="nav-item">
                <NavLink className="nav-link" to="/flight">
                  Flight
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="flightlink nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="flightlink nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="ml-auto">
            <button className="btn btn-primary">
              <NavLink className="text-white nav-link" to="/signUp">
                Login
              </NavLink>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
