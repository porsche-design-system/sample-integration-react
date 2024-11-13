import { componentsReady } from '@porsche-design-system/components-react';
import { fireEvent, waitFor } from '@testing-library/react';
import { FormsPage } from '../../pages';
import { renderWithProvider } from './helper';

describe('FormsPage', () => {
  it('heading should be changed according the selected value', async () => {
    const { getByText, getByTestId } = renderWithProvider(<FormsPage />);
    await componentsReady();
    expect(getByText('Change this Heading by selecting')).toBeInTheDocument();

    fireEvent.change(getByTestId('select'), { target: { value: 'Heading B' } });
    expect(getByText('Heading B')).toBeInTheDocument();

    fireEvent.change(getByTestId('select'), { target: { value: 'Heading C' } });
    expect(getByText('Heading C')).toBeInTheDocument();
  });

  it('heading should be displayed after click on Checkbox', async () => {
    const { getByText, getByTestId } = renderWithProvider(<FormsPage />);
    await componentsReady();
    const input = getByTestId('checkbox');

    input.click();
    waitFor(() => expect(getByText('Checkbox Works')).toBeInTheDocument());
  });

  it('heading should be displayed after click on RadioButton', async () => {
    const { getByText, getByTestId } = renderWithProvider(<FormsPage />);
    await componentsReady();
    const input = getByTestId('radiobutton');

    input.click();
    waitFor(() => expect(getByText('Radio Works')).toBeInTheDocument());
  });

  it('heading should be changed according the typed value', async () => {
    const { getByText, getByTestId } = renderWithProvider(<FormsPage />);
    await componentsReady();
    getByText('Change this Heading by typing');

    fireEvent.change(getByTestId('input'), { target: { value: 'Heading C' } });
    getByText('Heading C');

    fireEvent.change(getByTestId('input'), { target: { value: 'Heading B' } });
    getByText('Heading B');
  });

  /* jsdom has some limitations. One of them is the fact that we cant change location. But we are able to test the closest href */
  it('slotted Link should navigate to PDS', async () => {
    const { getByText } = renderWithProvider(<FormsPage />);
    await componentsReady();
    const link = getByText('Slotted Link');

    expect(link).toHaveAttribute('href', 'https://designsystem.porsche.com');
  });
});
