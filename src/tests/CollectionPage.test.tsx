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
    await componentsReady();
    const headLineElement = getByText('Headline appears through Button click');

    const dismissButtonElement = getByText('Dismiss');
    fireEvent.click(dismissButtonElement);
    await componentsReady();
    expect(headLineElement).not.toBeInTheDocument();
  });
});
