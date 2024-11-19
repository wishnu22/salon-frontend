import React, { useState } from 'react';
import '../styles/DetailPage.css';

const DetailedPage = () => {
  const [chairs, setChairs] = useState([
    { id: 1, status: 'available' },
    { id: 2, status: 'booked' },
    { id: 3, status: 'available' },
    { id: 4, status: 'available' },
    { id: 5, status: 'booked' },
    { id: 6, status: 'available' },
    { id: 7, status: 'available' },
    { id: 8, status: 'booked' },
    { id: 9, status: 'available' },
    { id: 10, status: 'available' },
  ]);

  const [artists] = useState([
    { name: 'John Doe', id: 1 },
    { name: 'Jane Smith', id: 2 },
    { name: 'Alex Brown', id: 3 },
  ]);

  const [services] = useState([
    { name: 'Haircut', rate: 200 },
    { name: 'Facial', rate: 500 },
    { name: 'Manicure', rate: 300 },
  ]);

  const [reviews] = useState([
    { user: 'Alice', comment: 'Great service!', rating: 5 },
    { user: 'Bob', comment: 'Decent experience.', rating: 3 },
  ]);

  const [selectedArtist, setSelectedArtist] = useState('');
  const [selectedChairs, setSelectedChairs] = useState([]);
  const bookingChargePerChair = 10;

  const handleChairClick = (id) => {
    if (!selectedArtist) {
      alert('Please select an artist first!');
      return;
    }

    setChairs((prevChairs) =>
      prevChairs.map((chair) =>
        chair.id === id
          ? { ...chair, status: chair.status === 'available' ? 'selected' : 'available' }
          : chair
      )
    );

    setSelectedChairs((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((chairId) => chairId !== id) // Remove deselected chair
        : [...prevSelected, id] // Add selected chair
    );
  };

  const handleBooking = () => {
    if (selectedChairs.length === 0) {
      alert('Please select at least one chair!');
      return;
    }

    const totalCharge = selectedChairs.length * bookingChargePerChair;
    alert(`Chairs ${selectedChairs.join(', ')} booked successfully! ₹${totalCharge} will be charged.`);
    // Redirect to user registration or login page
    window.location.href = '/user-details'; // Update with the actual route
  };

  return (
    <div className="detailed-page">
      <h1>Salon Details</h1>
      <div className="salon-info">
        <h2>Luxury Salon</h2>
        <p>Location: Main Street, City Center</p>
        <p>Rating: 4.5/5</p>
      </div>

      <div className="services-section">
        <h2>Services & Rates</h2>
        <ul>
          {services.map((service, index) => (
            <li key={index}>
              {service.name}: ₹{service.rate}
            </li>
          ))}
        </ul>
      </div>

      <div className="artist-selection">
        <h2>Select an Artist</h2>
        <select onChange={(e) => setSelectedArtist(e.target.value)} value={selectedArtist}>
          <option value="" disabled>
            Choose an Artist
          </option>
          {artists.map((artist) => (
            <option key={artist.id} value={artist.name}>
              {artist.name}
            </option>
          ))}
        </select>
      </div>

      <div className="chairs-container">
        <h2>Select Your Chair(s)</h2>
        <div className="chairs-grid">
          {chairs.map((chair) => (
            <div
              key={chair.id}
              className={`chair ${chair.status}`}
              onClick={() => chair.status === 'available' && handleChairClick(chair.id)}
            >
              {chair.status === 'booked' ? '⛔' : chair.id}
            </div>
          ))}
        </div>
      </div>

      {selectedChairs.length > 0 && (
        <div className="booking-details">
          <h3>Booking Details</h3>
          <p>Selected Chairs: {selectedChairs.join(', ')}</p>
          <p>Total Booking Charge: ₹{selectedChairs.length * bookingChargePerChair}</p>
          <button className="book-button" onClick={handleBooking}>
            Confirm Booking
          </button>
        </div>
      )}

      <div className="reviews-section">
        <h2>Customer Reviews</h2>
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <p>
              <strong>{review.user}:</strong> {review.comment} (Rating: {review.rating}/5)
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailedPage;
