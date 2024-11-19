import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookingPage = () => {
  const [salon, setSalon] = useState({});
  const [selectedTime, setSelectedTime] = useState("");
  const { salonId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/api/salons/${salonId}`)
      .then(res => res.json())
      .then(data => setSalon(data));
  }, [salonId]);

  const handleBooking = () => {
    alert(`Booking confirmed for ${salon.name} at ${selectedTime}`);
  };

  return (
    <div className="container mt-5">
      <h1>Book Service at {salon.name}</h1>
      <p>{salon.location}</p>
      <h3>Select a Time Slot</h3>
      <div className="form-group">
        <select className="form-control" onChange={(e) => setSelectedTime(e.target.value)}>
          <option value="">Select a time</option>
          {salon.timeSlots && salon.timeSlots.map((time, index) => (
            <option key={index} value={time}>{time}</option>
          ))}
        </select>
      </div>
      <button className="btn btn-success mt-3" onClick={handleBooking}>Confirm Booking</button>
    </div>
  );
}

export default BookingPage;
