import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

const availableTimes = ["12:00 PM", "1:00 PM", "2:00 PM"];
const mockSubmitForm = jest.fn();

test('renders BookingForm component', () => {
    render(<BookingForm availableTimes={availableTimes} SubmitForm={mockSubmitForm} />);

    expect(screen.getByLabelText(/Choose Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { value: /Make Your Reservation/i })).toBeInTheDocument();
});

test('submits the form with correct data', () => {
    render(<BookingForm availableTimes={availableTimes} SubmitForm={mockSubmitForm} />);

    fireEvent.change(screen.getByLabelText(/Choose Date/i), { target: { value: '2025-01-16' } });
    fireEvent.change(screen.getByLabelText(/Choose Time/i), { target: { value: '12:00 PM' } });
    fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });

    fireEvent.click(screen.getByRole('button', { value: /Make Your Reservation/i }));

    expect(mockSubmitForm).toHaveBeenCalledWith({
        date: '2025-01-16',
        time: '12:00 PM',
        guests: '4',
        occasion: 'Birthday'
    });
});