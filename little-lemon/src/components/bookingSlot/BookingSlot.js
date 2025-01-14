import React from 'react';

const BookingSlot = ({ time, status }) => {
  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', margin: '5px', backgroundColor: status === 'booked' ? '#f8d7da' : '#d4edda' }}>
      <span>{time}</span>
      <span style={{ float: 'right' }}>{status}</span>
    </div>
  );
};

export default BookingSlot;