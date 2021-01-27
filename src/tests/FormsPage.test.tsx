import { componentsReady } from '@porsche-design-system/components-react';
import { fireEvent } from '@testing-library/react';
import { FormsPage } from '../pages';
import { renderWithProvider } from './helper';

describe('FormsPage', () => {
  it('headline should be changed according the selected value', async () => {
    const { getByText, getByTestId } = renderWithProvider(<FormsPage />);
    await componentsReady();
    expect(getByText('Change this Headline by selecting')).toBeInTheDocument();

    fireEvent.change(getByTestId('select'), { target: { value: 'Headline B' } });
    expect(getByText('Headline B')).toBeInTheDocument();

    fireEvent.change(getByTestId('select'), { target: { value: 'Headline C' } });
    expect(getByText('Headline C')).toBeInTheDocument();
  });

  it('headline should be displayed after click on Checkbox', async () => {
    const { getByText, getByTestId } = renderWithProvider(<FormsPage />);
    await componentsReady();
    const input = getByTestId('checkbox');

    input.click();
    expect(getByText('Checkbox Works')).toBeInTheDocument();
  });

  it('headline should be displayed after click on RadioButton', async () => {
    const { getByText, getByTestId } = renderWithProvider(<FormsPage />);
    await componentsReady();
    const input = getByTestId('radiobutton');

    input.click();
    expect(getByText('Radio Works')).toBeInTheDocument();
  });

  it('headline should be changed according the typed value', async () => {
    const { getByText, getByTestId } = renderWithProvider(<FormsPage />);
    await componentsReady();
    getByText('Change this Headline by typing');

    fireEvent.change(getByTestId('input'), { target: { value: 'Headline C' } });
    getByText('Headline C');

    fireEvent.change(getByTestId('input'), { target: { value: 'Headline B' } });
    getByText('Headline B');
  });

  /* jsdom has some limitations. One of them is the fact that we cant change location. But we are able to test the closest href */
  it('slotted Link should navigate to PDS', async () => {
    const { getByText } = renderWithProvider(<FormsPage />);
    await componentsReady();
    const link = getByText('Slotted Link');

    expect(link).toHaveAttribute('href', 'https://designsystem.porsche.com');
  });
});
