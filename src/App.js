// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserSign from "./components/UserSign";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Flight from "./components/Flight";
import Home from "./components/Home";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import LogIn from "./components/LogIn";

export function App() {
  const [loggedInUsername, setLoggedInUsername] = useState("");

  const handleLogin = (username) => {
    setLoggedInUsername(username);
  };

  const handleLogout = () => {
    setLoggedInUsername("");
  };

  return (
    <Router>
      <div className="App">
        <Header
          isLoggedIn={loggedInUsername !== ""}
          username={loggedInUsername}
          onLogout={handleLogout}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flight" element={<Flight />} />
          <Route
            path="/signUp"
            element={<UserSign onLogin={handleLogin} />}
          />
          <Route
            path="/logIN"
            element={<LogIn onLogin={handleLogin} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
