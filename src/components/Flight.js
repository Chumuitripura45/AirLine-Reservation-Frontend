import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Layout from './Layout';

const Flight = () => {
  const [flights, setFlights] = useState([]);
  const [searchParams, setSearchParams] = useState({
    source: '',
    destination: '',
    departureDate: '',
    arrivalDate: '',
  });
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [availableSources, setAvailableSources] = useState([]);
  const [availableDestinations, setAvailableDestinations] = useState([]);

  useEffect(() => {
    // Fetch flights data from the API
    const fetchFlights = async () => {
      try {
        const response = await axios.get('http://localhost:5275/api/flights'); // Replace with your API endpoint
        setFlights(response.data);

        // Extract and set available sources and destinations
        const sources = Array.from(new Set(response.data.map((flight) => flight.source)));
        const destinations = Array.from(new Set(response.data.map((flight) => flight.destination)));
        setAvailableSources(sources);
        setAvailableDestinations(destinations);
      } catch (error) {
        console.error('Error fetching flights:', error);
      }
    };

    fetchFlights();
  }, []);

  useEffect(() => {
    // Filter flights based on search parameters
    const filterFlights = () => {
      const { source, destination, departureDate, arrivalDate } = searchParams;
      const filtered = flights.filter((flight) => {
        return (
          flight.source.toLowerCase().includes(source.toLowerCase()) &&
          flight.destination.toLowerCase().includes(destination.toLowerCase()) &&
          (departureDate === '' || flight.departureDate.includes(departureDate)) &&
          (arrivalDate === '' || flight.arrivalDate.includes(arrivalDate))
        );
      });
      setFilteredFlights(filtered);
    };

    filterFlights();
  }, [flights, searchParams]);

  const handleBookFlight = (flightId,price) => {
    // Redirect to the booking page with the flightId as a URL parameter
    localStorage.setItem('selectedFlightId', flightId);
  localStorage.setItem('selectedFlightPrice', price);
    window.location.href = `/booking`;
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    date.setDate(date.getDate() + 1);
    return date.toISOString().split('T')[0]; // Format as "YYYY-MM-DD"
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Layout>
    <div>
      <h1>Flight List</h1>
      <div>
        {/* ... (input fields for filtering flights) */}<input
          type="text"
          name="source"
          value={searchParams.source}
          onChange={handleInputChange}
          placeholder="Source"
          list="sourceOptions"
        />
        <datalist id="sourceOptions">
          {availableSources.map((source) => (
            <option key={source} value={source} />
          ))}
        </datalist>
        <input
          type="text"
          name="destination"
          value={searchParams.destination}
          onChange={handleInputChange}
          placeholder="Destination"
          list="destinationOptions"
        />
        <datalist id="destinationOptions">
          {availableDestinations.map((destination) => (
            <option key={destination} value={destination} />
          ))}
        </datalist>
        <input
          type="date"
          name="departureDate"
          value={searchParams.departureDate}
          onChange={handleInputChange}
          placeholder="Departure Date"
        />
        <input
          type="date"
          name="arrivalDate"
          value={searchParams.arrivalDate}
          onChange={handleInputChange}
          placeholder="Arrival Date"
        />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredFlights.map((flight) => (
          <div key={flight.flightId} style={{ width: '30%', margin: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', textAlign: 'left' }}>
            <div>
              <strong>Source:</strong> {flight.source}
            </div>
            <div>
              <strong>Destination:</strong> {flight.destination}
            </div>
            <div>
              <strong>Departure Date:</strong> {formatDate(flight.departureDate)}
            </div>
            <div>
              <strong>Departure Time:</strong> {flight.departureTime}
            </div>
            <div>
              <strong>Arrival Date:</strong> {formatDate(flight.arrivalDate)}
            </div>
            <div>
              <strong>Arrival Time:</strong> {flight.arrivalTime}
            </div>
            <div>
              <strong>Price:</strong> {flight.price}
            </div>
            <button onClick={() => handleBookFlight(flight.flightId,flight.price)}>Book</button>
          </div>
        ))}
      </div>
    </div>
    </Layout>
  );
};

export default Flight;
