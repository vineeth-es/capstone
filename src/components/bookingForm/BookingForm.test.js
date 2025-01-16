import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={[]} SubmitForm={() => {}} />);
    const headingElement = screen.getByText(/Make Your Reservation/i);
    expect(headingElement).toBeInTheDocument();
});

test('Renders the date input field', () => {
    render(<BookingForm availableTimes={[]} SubmitForm={() => {}} />);
    const dateInput = screen.getByLabelText(/Choose Date:/i);
    expect(dateInput).toBeInTheDocument();
});

test('Renders the time select field', () => {
    render(<BookingForm availableTimes={[]} SubmitForm={() => {}} />);
    const timeSelect = screen.getByLabelText(/Choose Time:/i);
    expect(timeSelect).toBeInTheDocument();
});

test('Renders the guests input field', () => {
    render(<BookingForm availableTimes={[]} SubmitForm={() => {}} />);
    const guestsInput = screen.getByLabelText(/Number of Guests:/i);
    expect(guestsInput).toBeInTheDocument();
});

test('Renders the occasion select field', () => {
    render(<BookingForm availableTimes={[]} SubmitForm={() => {}} />);
    const occasionSelect = screen.getByLabelText(/Occasion:/i);
    expect(occasionSelect).toBeInTheDocument();
});

test('Submit button is rendered', () => {
    render(<BookingForm availableTimes={[]} SubmitForm={() => {}} />);
    const submitButton = screen.getByRole('button', { name: /Make Your Reservation/i });
    expect(submitButton).toBeInTheDocument();
});

test('Form can be submitted', () => {
    const mockSubmitForm = jest.fn();
    render(<BookingForm availableTimes={['18:00', '19:00']} SubmitForm={mockSubmitForm} />);
    
    fireEvent.change(screen.getByLabelText(/Choose Date:/i), { target: { value: '2023-12-31' } });
    fireEvent.change(screen.getByLabelText(/Choose Time:/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/Number of Guests:/i), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/Occasion:/i), { target: { value: 'Birthday' } });
    fireEvent.click(screen.getByRole('button', { name: /Make Your Reservation/i }));

    expect(mockSubmitForm).toHaveBeenCalledWith({
        date: '2023-12-31',
        time: '18:00',
        guests: '4',
        occasion: 'Birthday'
    });
});