import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Suppliers.css";


const SalonList = () => {
  const [salons, setSalons] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/salons')
      .then(res => res.json())
      .then(data => setSalons(data));
  }, []);

  return (
    <div className="container mt-5">
      <h1>Available Salons</h1>
      <div className="row">
        {salons.map(salon => (
          <div key={salon.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={salon.image} className="card-img-top" alt={salon.name} />
              <div className="card-body">
                <h5 className="card-title">{salon.name}</h5>
                <p className="card-text">{salon.location}</p>
                <Link to={`/booking/${salon.id}`} className="btn btn-primary">Book Now</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SalonList;
