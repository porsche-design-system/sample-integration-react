import { componentsReady } from '@porsche-design-system/components-react';
import { fireEvent } from '@testing-library/react';
import { CollectionPage } from '../pages';
import { renderWithProvider } from './helper';

describe('CollectionPage', () => {
  it('renders a headline from Porsche Design System', async () => {
    const { getByText } = renderWithProvider(<CollectionPage />);
    await componentsReady();
    const submitButtonElement = getByText('Submit');
    fireEvent.click(submitButtonElement);
    const headLineElement = getByText(/Headline appears through Button click/i);
    expect(headLineElement).toBeInTheDocument();
  });

  it('dismisses the headline from Porsche Design System', async () => {
    const { getByText } = renderWithProvider(<CollectionPage />);
    await componentsReady();
    const submitButtonElement = getByText('Submit');
    fireEvent.click(submitButtonElement);
    const headLineElement = getByText('Headline appears through Button click');

    const dismissButtonElement = getByText('Dismiss');
    fireEvent.click(dismissButtonElement);
    expect(headLineElement).not.toBeInTheDocument();
  });

  it('a wrapped Link should navigate to #hashTest', async () => {
    const { getByText } = renderWithProvider(<CollectionPage />);
    await componentsReady();
    const link = getByText(/Test PLinkPure/i);

    expect(link.closest('a')).toHaveAttribute('href', '#hashTest');
  });

  it('a wrapped Link should navigate to #propHashTest', async () => {
    const { getByText } = renderWithProvider(<CollectionPage />);
    await componentsReady();
    const link = getByText(/Test propHash/i);

    expect(link).toHaveAttribute('href', '#propHashTest');
  });

  it('pagination should return page 2', async () => {
    const { container, getByText } = renderWithProvider(<CollectionPage />);
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
});
