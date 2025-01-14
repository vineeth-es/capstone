import React, { useState, useEffect } from 'react';

const BookingForm = ({ availableTimes, onDateChange }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (date) {
      onDateChange(date);
    }
  }, [date, onDateChange]);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!date) newErrors.date = 'Date is required';
    if (!time) newErrors.time = 'Time is required';
    if (guests < 1 || guests > 10) newErrors.guests = 'Guests must be between 1 and 10';
    if (!occasion) newErrors.occasion = 'Occasion is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    const formData = { date, time, guests, occasion };
    const success = await submitAPI(formData);
    if (success) {
      console.log('Reservation successful:', formData);
    } else {
      console.log('Reservation failed');
    }
  };

  const submitAPI = function(formData) {
    return true;
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        aria-required="true"
        aria-describedby="date-error"
      />
      {errors.date && <span id="date-error" style={{ color: 'red' }}>{errors.date}</span>}

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        aria-required="true"
        aria-describedby="time-error"
      >
        <option value="">Select a time</option>
        {availableTimes.map((timeOption) => (
          <option key={timeOption} value={timeOption}>
            {timeOption}
          </option>
        ))}
      </select>
      {errors.time && <span id="time-error" style={{ color: 'red' }}>{errors.time}</span>}

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        placeholder="1"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        aria-required="true"
        aria-describedby="guests-error"
      />
      {errors.guests && <span id="guests-error" style={{ color: 'red' }}>{errors.guests}</span>}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        aria-required="true"
        aria-describedby="occasion-error"
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      {errors.occasion && <span id="occasion-error" style={{ color: 'red' }}>{errors.occasion}</span>}

      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;