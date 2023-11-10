import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserSign from "./components/UserSign";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Flight from "./components/Flight";
import Home from "./components/Home";
import Booking from "./components/Booking";

export function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/flight" element={<Flight />} />
          <Route path="/signUp" element={<UserSign />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
