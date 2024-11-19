import React, { useEffect } from 'react';
import '../styles/PaymentPage.css';

const PaymentPage = ({ shopName, selectedChairs, totalAmount }) => {
  shopName = shopName || 'Demo Shop';
  selectedChairs = selectedChairs || [1, 2];
  totalAmount = totalAmount || selectedChairs.length * 10;

  useEffect(() => {
    console.log('Shop Name:', shopName);
    console.log('Selected Chairs:', selectedChairs);
    console.log('Total Amount:', totalAmount);
  }, [shopName, selectedChairs, totalAmount]);

  const loadRazorpay = () => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const options = {
        key: 'rzp_test_OTyOnejTSNPpFm', // Replace with your Razorpay API Key
        amount: totalAmount * 100, // Amount in paise
        currency: 'INR',
        name: shopName,
        description: 'Salon Booking Payment',
        handler: function (response) {
          alert('Payment Successful! Payment ID: ' + response.razorpay_payment_id);
        },
        prefill: {
          name: 'User Name',
          email: 'user@example.com',
          contact: '9876543210',
        },
        theme: {
          color: '#5a67d8',
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    };

    script.onerror = () => {
      alert('Failed to load Razorpay SDK. Please try again.');
    };
  };

  return (
    <div className="payment-page">
      <div className="payment-card">
        <h1>Confirm Your Payment</h1>
        <div className="payment-details">
          <p><strong>Shop Name:</strong> {shopName}</p>
          <p><strong>Selected Chairs:</strong> {selectedChairs.join(', ')}</p>
          <p><strong>Total Amount:</strong> ₹{totalAmount}</p>
        </div>
        <button className="pay-button" onClick={loadRazorpay}>
          Pay ₹{totalAmount}
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
