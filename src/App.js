// import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './components/Navbar';
// import SalonList from './components/SalonList';
// import BookingPage from './components/BookingPage';

// const App = () => {
//   return (
//      <Router>
//      <Navbar />
//       <Routes>
        
//         <Route path="/salons" exact component={SalonList} />
//         <Route path="/booking/:salonId" component={BookingPage} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailPage from './components/DetailPage';
import UserDetailsPage from './components/UserDetailsPage';
import PaymentPage from './components/PaymentPage';
import LandingPage from './components/LandingPage';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        {/* <Route path="/" element={<DetailPage />} /> */}
        <Route path="/user-details" element={<UserDetailsPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
};

export default App;
