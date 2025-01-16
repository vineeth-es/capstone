import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Booking from './pages/booking/Booking';
import ConfirmedBooking from './pages/confirmedBooking/ConfirmedBooking';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Booking />} />
        <Route path="/confirm" element={<ConfirmedBooking />} />
      </Routes>
    </Router>
  );
}

export default App;
