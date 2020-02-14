import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('@porsche-design-system/components-react', () => ({
  PHeadline: props => <mock-PHeadline>{ props.children }</mock-PHeadline>,
  PIcon: () => <mock-PIcon></mock-PIcon>,
  PButton: props => <button>{ props.children }</button>
}));

test('renders a headline from Porsche Design System', async () => {
  const { getByText } = render(<App />);
  const submitButtonElement = getByText(/Submit/i);
  submitButtonElement.click();
  const headLineElement = getByText(/Hello/i);
  expect(headLineElement).toBeInTheDocument();
});
