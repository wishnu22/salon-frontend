// src/components/SalonSearchPage.js

import React, { useState } from "react";
import salonData from "./salonData"; // You can import salon data or fetch from API
import '../styles/SalonSearchPage.css';
const SalonSearchPage = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Store the search query
  const [city, setCity] = useState("Auto-Detected City"); // Store city name

  // Function to handle search query changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter salons based on the search query
  const filteredSalons = salonData.filter((salon) => {
    return (
      salon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      salon.freelancer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      salon.city.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div>
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Salon or Freelancer"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <span className="lens-icon">🔍</span>
      </div>

      {/* City Selection */}
      <div className="city-name">
        <span>Current City: {city}</span>
        <button onClick={() => setCity("New City")}>Change City</button>
      </div>

      {/* Displaying Filtered Results */}
      <div className="salons-list">
        {filteredSalons.length > 0 ? (
          filteredSalons.map((salon) => (
            <div className="salon-card" key={salon.id}>
              <img src={salon.image} alt={salon.name} />
              <div className="salon-details">
                <h3>{salon.name}</h3>
                <p>{salon.freelancer}</p>
                <p>{salon.city}</p>
                <p>Rating: {salon.rating}</p>
                <p>Availability: {salon.available ? "Available" : "Not Available"}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No salons or freelancers found.</p>
        )}
      </div>
    </div>
  );
};

export default SalonSearchPage;
