import React, { useState, useEffect } from 'react';
import DetailPage from './DetailPage';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const [city, setCity] = useState('Loading...');
  const [search, setSearch] = useState('');
  const [salons, setSalons] = useState([]);
  const [offers, setOffers] = useState([]);
  const [selectedSalon, setSelectedSalon] = useState(null); // Track selected salon
  const [cityList, setCityList] = useState([
    'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Chandigarh', 'Surat', 'Kochi',
  ]);

  useEffect(() => {
    // Get current location using Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`)
          .then(res => res.json())
          .then(data => setCity(data.city || 'Unknown city'));
      });
    }

    // Mock data for salons and offers (replace with actual API calls)
    setSalons([
      { id: 1, name: "Luxury Salon", image: "salon1.jpg", distance: "500 mtr", rating: 4.5, available: true },
      { id: 2, name: "Beauty Hub", image: "salon2.jpg", distance: "2 km", rating: 4.0, available: false },
    ]);

    setOffers([
      { title: "50% Off on Haircuts", description: "Limited time offer!" },
      { title: "Combo Offer", description: "Facial + Haircut at 30% off" },
    ]);
  }, []);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSalonClick = (salon) => {
    setSelectedSalon(salon); // Set the selected salon for DetailPage
  };

  return (
    <div className="landing-page">
      {/* Show LandingPage or DetailPage based on selectedSalon */}
      {!selectedSalon ? (
        <>
          <div className="search-bar-container">
            <div className="search-bar">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search for salons or freelancers"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="city-selector">
                <span>{city}</span>
                <button className="change-city" onClick={() => setCity('')}>Change City</button>
                {city === '' && (
                  <div className="city-dropdown">
                    <select onChange={handleCityChange} value={city}>
                      <option value="" disabled>Select City</option>
                      {cityList.map((city, index) => (
                        <option key={index} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="carousel">
            <h2>Special Offers</h2>
            <div className="carousel-content">
              {offers.map((offer, index) => (
                <div key={index} className="offer-card">
                  <h3>{offer.title}</h3>
                  <p>{offer.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="salon-list">
            <h2>Nearby Salons</h2>
            <div className="salon-cards">
              {salons.map((salon) => (
                <div
                  key={salon.id}
                  className="salon-card"
                  onClick={() => handleSalonClick(salon)}
                >
                  <img src={salon.image} alt={salon.name} />
                  <div className="salon-details">
                    <h3>{salon.name}</h3>
                    <p>{salon.distance}</p>
                    <p>Rating: {salon.rating}</p>
                    <div className="availability">
                      {salon.available ? (
                        <span className="green-light">Available</span>
                      ) : (
                        <span className="red-light">Not Available</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <DetailPage selectedItem={selectedSalon} />
      )}
    </div>
  );
};

export default LandingPage;
