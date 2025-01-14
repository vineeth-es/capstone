import React, { Suspense, useReducer, useState, useEffect } from 'react';
import './Booking.css';
import Header from '../../components/header/Header';
import BookingForm from '../../components/bookingForm/BookingForm';
import BookingSlot from '../../components/bookingSlot/BookingSlot';

function Booking() {
  const [bookedTimes, setBookedTimes] = useState([]); // Example booked times

  const fetchAPI = async (date) => {
    // Mock API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(['10:00 AM', '11:00 AM', '12:00 PM']);
      }, 1000);
    });
  };

  const initializeTimes = async () => {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    return await fetchAPI(today);
  };

  const updateTimes = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return action.times || [];
      default:
        return state;
    }
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, []);

  useEffect(() => {
    const init = async () => {
      const times = await initializeTimes();
      dispatch({ type: 'UPDATE_TIMES', times });
    };
    init();
  }, []);

  const handleDateChange = async (date) => {
    const times = await fetchAPI(date);
    dispatch({ type: 'UPDATE_TIMES', times });
  };

  return (
    <div className="booking">
      <Suspense fallback='Loading...'>
        <Header />
        <section className='booking-sec'>
          <BookingForm availableTimes={availableTimes} onDateChange={handleDateChange} />
          <div>
            <h2>Booking Slots</h2>
            <div>
              {availableTimes.map((time) => (
                <BookingSlot
                  key={time}
                  time={time}
                  status={bookedTimes.includes(time) ? 'booked' : 'available'}
                />
              ))}
            </div>
          </div>
        </section>
      </Suspense>
    </div>
  );
}

export default Booking;