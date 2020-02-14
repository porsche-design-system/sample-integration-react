import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders a headline from Porsche Design System', () => {
  const { getByText } = render(<App />);
  const headLineElement = getByText(/Hello/i);
  expect(headLineElement).toBeInTheDocument();
});
