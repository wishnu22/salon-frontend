import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ChairSelection = () => {
  const [selectedChairs, setSelectedChairs] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const history = useHistory();

  // Handle chair selection
  const handleChairSelection = (chairId) => {
    let newSelectedChairs = [...selectedChairs];

    if (newSelectedChairs.includes(chairId)) {
      newSelectedChairs = newSelectedChairs.filter(id => id !== chairId);
    } else {
      newSelectedChairs.push(chairId);
    }

    setSelectedChairs(newSelectedChairs);
    setTotalAmount(newSelectedChairs.length * 10); // Rs 10 for each chair
  };

  // Navigate to payment page with the selected data
  const handleProceedToPayment = () => {
    if (selectedChairs.length === 0) {
      alert('Please select at least one chair.');
      return;
    }

    const data = {
      shopName: "Salon XYZ", // Pass selected shop name here
      selectedChairs: selectedChairs,
      totalAmount: totalAmount
    };

    history.push({
      pathname: '/payment',
      state: data // Pass the data to the payment page
    });
  };

  return (
    <div className="chair-selection">
      <h1>Choose Your Chairs</h1>
      <div className="chair-grid">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((chairId) => (
          <div
            key={chairId}
            className={`chair ${selectedChairs.includes(chairId) ? 'selected' : ''}`}
            onClick={() => handleChairSelection(chairId)}
          >
            Chair {chairId}
          </div>
        ))}
      </div>
      <p>Total Amount: ₹{totalAmount}</p>
      <button onClick={handleProceedToPayment} className="proceed-button">Proceed to Payment</button>
    </div>
  );
};

export default ChairSelection;
