import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/OpeningPage.css";

const OpeningPage = () => {
  const redirectToHome = () => {
    window.location.href = "/home"; // Adjust routing as needed
  };

  return (
    <div className="opening-page d-flex justify-content-center align-items-center">
      <div className="overlay d-flex justify-content-center align-items-center">
        <div className="content text-center p-4 rounded shadow-lg">
          <h1 className="brand-name mb-4">Zelgry</h1>
          <p className="tagline mb-4">Make this moment yours</p>
          
          {/* Added the new animated caption */}
          <p className="caption mb-4">Beauty and Style, Just a Click Away</p>
          
          <button 
            className="enter-btn btn btn-light btn-lg shadow-lg" 
            onClick={redirectToHome}
          >
            Enter
          </button>
        </div>
      </div>
      <div className="bottom-nav">
        <button className="nav-btn">Home</button>
        <button className="nav-btn">Book Now</button>
        <button className="nav-btn">Profile</button>
      </div>
    </div>
  );
};

export default OpeningPage;
