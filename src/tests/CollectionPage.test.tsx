import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { CollectionPage } from '../pages';

describe('CollectionPage', () => {
  it('renders a headline from Porsche Design System', () => {
    const { getByText } = render(<CollectionPage />);
    const submitButtonElement = getByText('Submit');
    fireEvent.click(submitButtonElement);
    const headLineElement = getByText(/Headline appears through Button click/i);
    expect(headLineElement).toBeInTheDocument();
  });

  it('dismisses the headline from Porsche Design System', () => {
    const { getByText } = render(<CollectionPage />);
    const submitButtonElement = getByText('Submit');
    fireEvent.click(submitButtonElement);
    const headLineElement = getByText('Headline appears through Button click');

    const dismissButtonElement = getByText('Dismiss');
    fireEvent.click(dismissButtonElement);
    expect(headLineElement).not.toBeInTheDocument();
  });

  it('a wrapped Link should navigate to #hashTest', () => {
    const { getByText } = render(<CollectionPage />);
    const link = getByText(/Test PLinkPure/i);

    expect(link.closest('a')).toHaveAttribute('href', '#hashTest');
  });

  it('a wrapped Link should navigate to #propHashTest', () => {
    const { getByText } = render(<CollectionPage />);
    const link = getByText(/Test propHash/i);

    expect(link).toHaveAttribute('href', '#propHashTest');
  });

  it('pagination should return page 2', () => {
    const { container, getByText } = render(<CollectionPage />);

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
});
