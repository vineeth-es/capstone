import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders landing page by default', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Check if the Landing component is rendered by default
  expect(screen.getByText(/landing page content/i)).toBeInTheDocument();
});

test('navigates to About page', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Simulate navigation to the About page
  fireEvent.click(screen.getByText(/about/i));

  // Check if the About component is rendered
  expect(screen.getByText(/about page content/i)).toBeInTheDocument();
});

test('navigates to Booking page', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Simulate navigation to the Booking page
  fireEvent.click(screen.getByText(/booking/i));

  // Check if the Booking component is rendered
  expect(screen.getByText(/booking page content/i)).toBeInTheDocument();
});