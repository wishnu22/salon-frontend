import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Updated import to useNavigate
import '../styles//UserDetailsPage.css';

const UserDetailsPage = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpValid, setOtpValid] = useState(false);
  const navigate = useNavigate();  // Initialize useNavigate for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || mobile === '') {
      setError('Please fill all fields');
    } else {
      // Send OTP (Mocked OTP)
      setOtpSent(true);
      setError('');
      console.log('OTP Sent to', mobile);
      // In a real case, you would use an API to send OTP here.
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp === '123456') {
      setOtpValid(true);
      navigate('/payment', { state: { selectedChairs: 2 } });  // Redirect to payment page on valid OTP, pass chair info
    } else {
      setOtpValid(false);
      setError('Invalid OTP');
    }
  };

  return (
    <div className="user-details-page">
      <div className="form-container">
        <h1>Enter Your Details</h1>
        {!otpSent ? (
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name" className="input-label">Full Name</label>
              <input
                type="text"
                id="name"
                className="input-field"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="mobile" className="input-label">Mobile Number</label>
              <input
                type="text"
                id="mobile"
                className="input-field"
                placeholder="Enter your mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            {error && <div className="error-message">{error}</div>}
            <button type="submit" className="submit-button">Send OTP</button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit}>
            <div className="input-group">
              <label htmlFor="otp" className="input-label">Enter OTP</label>
              <input
                type="text"
                id="otp"
                className="input-field"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
            {error && <div className="error-message">{error}</div>}
            <button type="submit" className="submit-button">Verify OTP</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default UserDetailsPage;
