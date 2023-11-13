import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./CssAll/HeaderStyle.css";
import airLine from "./Images/airLine.jpg";

const Header = ({ isLoggedIn, username, onLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [buttonText, setButtonText] = useState("Login/Signup");

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleItemClick = (text) => {
    setButtonText(text);
    setShowDropdown(false);
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="container-fluid">
          <img src={airLine} className="imagePart" alt="Logo" />
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav">
            <ul className="navbar-nav flightlink">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
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
              <li className="nav-item">
                <NavLink className="flightlink nav-link" to="/booking">
                  Booking
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="ml-auto">
            {isLoggedIn ? (
              <div className="dropdown">
                <button
                  className="btn btn-primary dropdown-toggle"
                  type="button"
                  id="userDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <span className="mr-2">{username}</span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="userDropdown">
                  <li>
                    <button
                      className="dropdown-item btn btn-primary"
                      onClick={onLogout}>
                        <span className="mr-2">{username}</span>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={toggleDropdown}>
                  {buttonText}
                </button>
                <div
                  className={`dropdown-menu ${showDropdown ? "show" : ""}`}
                  aria-labelledby="dropdownMenuButton">
                  <NavLink className="dropdown-item" to="/logIN" onClick={() => handleItemClick("Log IN")}>
                    Log In
                  </NavLink>
                  <NavLink className="dropdown-item" to="/signUp" onClick={() => handleItemClick("Sign UP")}>
                    Sign Up
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
