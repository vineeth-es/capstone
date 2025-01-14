import React, { Suspense, useReducer, useState } from 'react';
import './Booking.css';
import Header from '../../components/header/Header';
import BookingForm from '../../components/bookingForm/BookingForm';
import BookingSlot from '../../components/bookingSlot/BookingSlot';

function Booking() {
  const [bookedTimes, setBookedTimes] = useState([]); // Example booked times

  const initializeTimes = async () => {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    return await fetchAPI(today);
  };

  const updateTimes = async (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        const { date } = action;
        return await fetchAPI(date);
      default:
        return state;
    }
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <div className="booking">
      <Suspense fallback='Loading...'>
        <Header />
        <section className='booking-sec'>
          <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
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