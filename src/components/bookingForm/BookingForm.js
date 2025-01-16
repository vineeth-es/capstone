import React from 'react';
import './BookingForm.css';

const BookingForm = (props) => {
    const [date, setDate] = React.useState("");
    const [time, setTime] = React.useState("");
    const [guests, setGuests] = React.useState("");
    const [occasion, setOccasion] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            date,
            time,
            guests,
            occasion
        };
        props.SubmitForm(formData);
    };

    const handleChange = (e) => {
        setDate(e);
    };

    return (
        <header>
            <section className="booking-form-container">
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div className='form-div'>
                            <label htmlFor="book-date">Choose Date: </label>
                            <input type="date" id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} required />
                        </div>
                        <div className='form-div'>
                            <label htmlFor="book-time">Choose Time: </label>
                            <select id="book-time" value={time} onChange={(e) => setTime(e.target.value)} required>
                                <option value="">Select a Time</option>
                                {props.availableTimes && props.availableTimes.length > 0 ? (
                                    props.availableTimes.map((availableTime) => (
                                        <option key={availableTime} value={availableTime}>{availableTime}</option>
                                    ))
                                ) : (
                                    <option disabled>No available times</option>
                                )}
                            </select>
                        </div>
                        <div className='form-div'>
                            <label htmlFor="book-guests">Number of Guests: </label>
                            <input type="number" id="book-guests" min="1" max="10" value={guests} onChange={(e) => setGuests(e.target.value)} required />
                        </div>
                        <div className='form-div'>
                            <label htmlFor="book-occasion">Occasion: </label>
                            <select id="book-occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>Date</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="form-div">
                            <input className='btn-submit' aria-label="On Click" type="submit" value="Make Your Reservation" />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;