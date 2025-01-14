import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Booking from './Booking';

test('renders Booking component', () => {
  render(<Booking />);
  expect(screen.getByText(/Booking Slots/i)).toBeInTheDocument();
});

test('initializes with available times', () => {
  render(<Booking />);
  const times = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  times.forEach((time) => {
    expect(screen.getByText(time)).toBeInTheDocument();
  });
});

test('updates booked times', () => {
  render(<Booking />);
  const timeToBook = '18:00';
  const timeElement = screen.getByText(timeToBook);
  fireEvent.click(timeElement);
  expect(timeElement).toHaveTextContent('booked');
});