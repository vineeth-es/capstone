import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
const dispatch = jest.fn();

test('renders BookingForm component', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
  expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
});

test('allows user to select date and time', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
  const dateInput = screen.getByLabelText(/Choose date/i);
  const timeSelect = screen.getByLabelText(/Choose time/i);

  fireEvent.change(dateInput, { target: { value: '2025-01-14' } });
  fireEvent.change(timeSelect, { target: { value: '18:00' } });

  expect(dateInput.value).toBe('2025-01-14');
  expect(timeSelect.value).toBe('18:00');
});

test('allows user to select number of guests and occasion', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
  const guestsInput = screen.getByLabelText(/Number of guests/i);
  const occasionSelect = screen.getByLabelText(/Occasion/i);

  fireEvent.change(guestsInput, { target: { value: '4' } });
  fireEvent.change(occasionSelect, { target: { value: 'Anniversary' } });

  expect(guestsInput.value).toBe('4');
  expect(occasionSelect.value).toBe('Anniversary');
});

test('submits the form and dispatches action', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
  const dateInput = screen.getByLabelText(/Choose date/i);
  const timeSelect = screen.getByLabelText(/Choose time/i);
  const submitButton = screen.getByText(/Make Your reservation/i);

  fireEvent.change(dateInput, { target: { value: '2025-01-14' } });
  fireEvent.change(timeSelect, { target: { value: '18:00' } });
  fireEvent.click(submitButton);

  expect(dispatch).toHaveBeenCalledWith({ type: 'UPDATE_TIMES', date: '2025-01-14', time: '18:00' });
});