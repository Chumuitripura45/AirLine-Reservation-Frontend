import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const username = localStorage.getItem('username');

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`http://localhost:5275/api/bookings?username=${username}`);
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, [username]);

  return (
    <div>
      <h1>My Bookings</h1>
      {bookings.length === 0 ? (
        <p>No bookings found for {username}.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {bookings.map((booking) => (
            <div key={booking.bookingId} style={{ width: '30%', margin: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', textAlign: 'left' }}>
              <div>
                <strong>Flight ID:</strong> {booking.FlightId}
              </div>
              <div>
                <strong>Number of Passengers:</strong> {booking.noOfPassengers}
              </div>
              <div>
                <strong>Status:</strong> {booking.status}
              </div>
              <div>
                <strong>Price:</strong> {booking.price}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
