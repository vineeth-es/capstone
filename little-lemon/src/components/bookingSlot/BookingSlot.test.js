import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingSlot from './BookingSlot';

test('renders BookingSlot component with available status', () => {
  render(<BookingSlot time="18:00" status="available" />);
  expect(screen.getByText('18:00')).toBeInTheDocument();
  expect(screen.getByText('available')).toBeInTheDocument();
  expect(screen.getByText('available').parentElement).toHaveStyle('background-color: #d4edda');
});

test('renders BookingSlot component with booked status', () => {
  render(<BookingSlot time="18:00" status="booked" />);
  expect(screen.getByText('18:00')).toBeInTheDocument();
  expect(screen.getByText('booked')).toBeInTheDocument();
  expect(screen.getByText('booked').parentElement).toHaveStyle('background-color: #f8d7da');
});