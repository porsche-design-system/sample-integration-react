import { componentsReady } from '@porsche-design-system/components-react';
import { fireEvent } from '@testing-library/react';
import { CollectionPage } from '../../pages';
import { renderWithProvider } from './helper';

describe('CollectionPage', () => {
  it('renders a heading from Porsche Design System', async () => {
    const { getByText } = renderWithProvider(<CollectionPage />);
    await componentsReady();
    const submitButtonElement = getByText('Submit');
    fireEvent.click(submitButtonElement);
    const headingElement = getByText(/Heading appears through Button click/i);
    expect(headingElement).toBeInTheDocument();
  });

  it('dismisses the heading from Porsche Design System', async () => {
    const { getByText } = renderWithProvider(<CollectionPage />);
    await componentsReady();
    const submitButtonElement = getByText('Submit');
    fireEvent.click(submitButtonElement);
    await componentsReady();
    const headingElement = getByText('Heading appears through Button click');

    const dismissButtonElement = getByText('Dismiss');
    fireEvent.click(dismissButtonElement);
    await componentsReady();
    expect(headingElement).not.toBeInTheDocument();
  });
});
