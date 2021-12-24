import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactSandbox from './ReactSandbox';

test('renders learn react link', () => {
  render(<ReactSandbox />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
