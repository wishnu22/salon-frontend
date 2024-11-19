import React, { useState, useEffect } from 'react';
import "../styles/Suppliers.css";


function SalonPage() {
  const [salons, setSalons] = useState([]);
  const [freelancers, setFreelancers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch salon and freelancer data (mocked for now)
    const fetchedSalons = [
      {
        id: '1',
        name: 'Glamour Beauty Salon',
        image: 'path_to_image.jpg',
        ratings: 4.5,
        available: true,
        distance: 2.5,
        city: 'Bangalore',
      },
      {
        id: '2',
        name: 'The Style Lab',
        image: 'path_to_image.jpg',
        ratings: 4.2,
        available: false,
        distance: 5.0,
        city: 'Bangalore',
      },
    ];

    const fetchedFreelancers = [
      {
        id: '1',
        name: 'John Doe',
        image: 'path_to_image.jpg',
        ratings: 4.8,
        available: true,
        distance: 1.2,
        city: 'Bangalore',
      },
      {
        id: '2',
        name: 'Jane Smith',
        image: 'path_to_image.jpg',
        ratings: 4.6,
        available: true,
        distance: 3.1,
        city: 'Bangalore',
      },
    ];

    setSalons(fetchedSalons);
    setFreelancers(fetchedFreelancers);
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredSalons = salons.filter((salon) =>
    salon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredFreelancers = freelancers.filter((freelancer) =>
    freelancer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="salon-page">
      <header className="header">
        <h1>Find Your Style</h1>
        <input
          type="text"
          className="search-bar"
          placeholder="Search Salons or Freelancers"
          value={searchQuery}
          onChange={handleSearch}
        />
      </header>

      <section className="salon-list">
        <h2>Salons</h2>
        <div className="cards">
          {filteredSalons.map((salon) => (
            <div key={salon.id} className="card">
              <img src={salon.image} alt={salon.name} />
              <div className="card-info">
                <h3>{salon.name}</h3>
                <p>{salon.ratings} <span>⭐</span></p>
                <p>{salon.distance} km away</p>
                <p>
                  Availability: <span className={salon.available ? 'available' : 'unavailable'}>{salon.available ? 'Available' : 'Not Available'}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="freelancer-list">
        <h2>Freelancers</h2>
        <div className="cards">
          {filteredFreelancers.map((freelancer) => (
            <div key={freelancer.id} className="card">
              <img src={freelancer.image} alt={freelancer.name} />
              <div className="card-info">
                <h3>{freelancer.name}</h3>
                <p>{freelancer.ratings} <span>⭐</span></p>
                <p>{freelancer.distance} km away</p>
                <p>
                  Availability: <span className={freelancer.available ? 'available' : 'unavailable'}>{freelancer.available ? 'Available' : 'Not Available'}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SalonPage;
