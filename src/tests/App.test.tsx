import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { CollectionPage, FormsPage } from '../pages';
import { componentsReady } from '@porsche-design-system/components-react';

test('renders a headline from Porsche Design System', async () => {
  const { getByText } = render(<CollectionPage />);
  await componentsReady();
  const submitButtonElement = getByText('Submit');
  fireEvent.click(submitButtonElement);
  const headLineElement = getByText(/Headline appears through Button click/i);
  expect(headLineElement).toBeInTheDocument();
});

test('dismisses the headline from Porsche Design System', async () => {
  const { getByText } = render(<CollectionPage />);
  await componentsReady();
  const submitButtonElement = getByText('Submit');
  fireEvent.click(submitButtonElement);
  const headLineElement = getByText('Headline appears through Button click');

  const dismissButtonElement = getByText('Dismiss');
  fireEvent.click(dismissButtonElement);
  expect(headLineElement).not.toBeInTheDocument();
});

test('headline should be changed according the selected value', async () => {
  const { getByText, getByTestId } = render(<FormsPage />);
  await componentsReady();
  expect(getByText('Change this Headline by selecting')).toBeInTheDocument();

  fireEvent.change(getByTestId('select'), { target: { value: 'Headline B' } });
  expect(getByText('Headline B')).toBeInTheDocument();

  fireEvent.change(getByTestId('select'), { target: { value: 'Headline C' } });
  expect(getByText('Headline C')).toBeInTheDocument();
});

test('headline should be displayed after click on Checkbox', async () => {
  const { getByText, getByTestId } = render(<FormsPage />);
  await componentsReady();
  const input = getByTestId('checkbox');

  input.click();
  expect(getByText('Checkbox Works')).toBeInTheDocument();
});

test('headline should be displayed after click on RadioButton', async () => {
  const { getByText, getByTestId } = render(<FormsPage />);
  await componentsReady();
  const input = getByTestId('radiobutton');

  input.click();
  expect(getByText('Radio Works')).toBeInTheDocument();
});

test('headline should be changed according the typed value', async () => {
  const { getByText, getByTestId } = render(<FormsPage />);
  await componentsReady();
  getByText('Change this Headline by typing');

  fireEvent.change(getByTestId('input'), { target: { value: 'Headline C' } });
  getByText('Headline C');

  fireEvent.change(getByTestId('input'), { target: { value: 'Headline B' } });
  getByText('Headline B');
});

/* jsdom has some limitations. One of them is the fact that we cant change location. But we are able to test the closest href */
test('slotted Link should navigate to PDS', async () => {
  const { getByText } = render(<FormsPage />);
  await componentsReady();
  const link = getByText('Slotted Link');

  expect(link).toHaveAttribute('href', 'https://designsystem.porsche.com');
});

test('link should navigate to #hashTest', async () => {
  const { getByText } = render(<CollectionPage />);
  await componentsReady();
  const link = getByText(/Test PLinkPure/i);

  expect(link).toHaveAttribute('href', '#hashTest');
});

test('link should navigate to #propHashTest', async () => {
  const { getByText } = render(<CollectionPage />);
  await componentsReady();
  const link = getByText(/Test propHash/i);

  expect(link).toHaveAttribute('href', '#propHashTest');
});

test('pagination should return page 2', async () => {
  const { container, getByText } = render(<CollectionPage />);
  await componentsReady();

  if (!container.querySelector('li[value=NEXT_PAGE_LINK]')) {
    return;
  }
  const nextButton = container.querySelector('li[value=NEXT_PAGE_LINK]');

  if (!nextButton) {
    return;
  }
  fireEvent.click(nextButton);

  expect(getByText('You are on Page 2 Page')).toBeInTheDocument();
});
