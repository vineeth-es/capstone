import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Main.css';
import heroImg from '../../assets/restauranfood.jpg';
import Button from '../../core/components/button/Button';
import BookingForm from '../bookingForm/BookingForm';

const fetchAPI = function (date) {
  let result = [];
  for (let i = 17; i <= 22; i++) {
    result.push(`${i}:00`);
    if (i !== 22) {
      result.push(`${i}:30`);
    }
  }
  console.log('Available times:', result);
  return result;
};

const submitAPI = function (formData) {
  console.log('Submitted form data:', formData);
  return true;
};

function Main() {
  const [availableTimes, setAvailableTimes] = useState(fetchAPI(new Date()));
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  function SubmitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/confirm");
    }
  }

  function handleClick() {
    setShowForm(true);
  }

  return (
    showForm ? (
      <BookingForm availableTimes={availableTimes} SubmitForm={SubmitForm} />
    ) : (
      <section className="hero">
        <div className="desc">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <Button label="Reserve a Table" click={handleClick} />
        </div>
        <img className="heroImg" src={heroImg} alt="hero" />
      </section>
    )
  );

}

export default Main;
