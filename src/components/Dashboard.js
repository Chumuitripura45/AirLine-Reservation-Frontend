import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from './Layout';
import { NavLink } from 'react-router-dom';

function Dashboard() {
  const [userData, setUserData] = useState([]);
  const [flightData, setFlightData] = useState([]);
  const [bookingData, setBookingData] = useState([]);
  const [newFlight, setNewFlight] = useState({
    source: '',
    destination: '',
    departureDate: '',
    departureTime: '',
    arrivalDate: '',
    arrivalTime: '',
    price: 0,
    class: '',
  });

  // Fetch data from the API when the component mounts
  useEffect(() => {
    // Fetch user data
    axios.get('http://localhost:5275/api/Users').then((response) => {
      setUserData(response.data);
    });

    // Fetch flight data
    axios.get('http://localhost:5275/api/Flights').then((response) => {
      setFlightData(response.data);
    });

    // Fetch booking data
    axios.get('http://localhost:5275/api/Bookings').then((response) => {
      setBookingData(response.data);
    });
  }, []);

  const handleDelete = (id, table) => {
    // Send a DELETE request to the API to delete the item
    axios.delete(`http://localhost:5275/api/${table}s/${id}`).then(() => {
      // After successful deletion, re-fetch the data to update the component
      axios.get(`http://localhost:5275/api/${table}s`).then((response) => {
        switch (table) {
          case 'user':
            setUserData(response.data);
            break;
          case 'flight':
            setFlightData(response.data);
            break;
          case 'booking':
            setBookingData(response.data);
            break;
          default:
            break;
        }
      });
    });
  };

  const handleAddFlight = () => {
    // Send a POST request to the API to add a new flight
    axios.post('http://localhost:5275/api/Flights', newFlight).then(() => {
      // After successful addition, re-fetch the flight data to update the component
      axios.get('http://localhost:5275/api/Flights').then((response) => {
        setFlightData(response.data);
      });

      // Clear the newFlight state after adding a flight
      setNewFlight({
        source: '',
        destination: '',
        departureDate: '',
        departureTime: '',
        arrivalDate: '',
        arrivalTime: '',
        price: 0,
        class: '',
      });
    });
  };

  return (
    
    <div>
    <NavLink to="/">
          <button className="btn btn-primary">Go to Home</button>
        </NavLink>
      <h2>User Table</h2>
      <table>
        {/* Display User table */}
        <thead>
          <tr>
            <th>Username</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.username}>
              <td>{user.username}</td>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => handleDelete(user.username, 'user')}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Flight Table</h2>
      <table>
        {/* Display Flight table */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Departure Date</th>
            <th>Departure Time</th>
            <th>Arrival Date</th>
            <th>Arrival Time</th>
            <th>Price</th>
            <th>Class</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {flightData.map((flight) => (
            <tr key={flight.flightId}>
              <td>{flight.flightId}</td>
              <td>{flight.source}</td>
              <td>{flight.destination}</td>
              <td>{flight.departureDate}</td>
              <td>{flight.departureTime}</td>
              <td>{flight.arrivalDate}</td>
              <td>{flight.arrivalTime}</td>
              <td>{flight.price}</td>
              <td>{flight.class}</td>
              <td>
                <button onClick={() => handleDelete(flight.flightId, 'flight')}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Booking Table</h2>
      <table>
        {/* Display Booking table */}
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Flight ID</th>
            <th>No Of Passengers</th>
            <th>Status</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookingData.map((booking) => (
            <tr key={booking.bookingId}>
              <td>{booking.bookingId}</td>
              <td>{booking.userId}</td>
              <td>{booking.flightId}</td>
              <td>{booking.noOfPassengers}</td>
              <td>{booking.status}</td>
              <td>{booking.price}</td>
              <td>
                <button onClick={() => handleDelete(booking.bookingId, 'booking')}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Form to add a new flight */}
      <h2>Add Flight</h2>
      <form>
        <label>Source:</label>
        <input
          type="text"
          value={newFlight.source}
          onChange={(e) => setNewFlight({ ...newFlight, source: e.target.value })}
        />
        <label>Destination:</label>
        <input
          type="text"
          value={newFlight.destination}
          onChange={(e) => setNewFlight({ ...newFlight, destination: e.target.value })}
        />
        <label>Departure Date:</label>
        <input
          type="date"
          value={newFlight.departureDate}
          onChange={(e) => setNewFlight({ ...newFlight, departureDate: e.target.value })}
        />
        <label>Departure Time:</label>
        <input
          type="text"
          value={newFlight.departureTime}
          onChange={(e) => setNewFlight({ ...newFlight, departureTime: e.target.value })}
        />
        <label>Arrival Date:</label>
        <input
          type="date"
          value={newFlight.arrivalDate}
          onChange={(e) => setNewFlight({ ...newFlight, arrivalDate: e.target.value })}
        />
        <label>Arrival Time:</label>
        <input
          type="text"
          value={newFlight.arrivalTime}
          onChange={(e) => setNewFlight({ ...newFlight, arrivalTime: e.target.value })}
        />
        <label>Price:</label>
        <input
          type="number"
          value={newFlight.price}
          onChange={(e) => setNewFlight({ ...newFlight, price: e.target.value })}
        />
        <label>Class:</label>
        <input
          type="text"
          value={newFlight.class}
          onChange={(e) => setNewFlight({ ...newFlight, class: e.target.value })}
        />
        <button type="button" onClick={handleAddFlight}>
          Add Flight
        </button>
      </form>
    </div>
    
  );
}

export default Dashboard;
