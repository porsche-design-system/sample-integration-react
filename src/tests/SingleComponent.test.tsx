import '@testing-library/jest-dom';
import { SingleComponent } from '../components';
import { componentsReady } from '@porsche-design-system/components-react';
import { renderWithProvider } from './helper';

test('renders a headline from Porsche Design System', async () => {
  const { getByText } = renderWithProvider(<SingleComponent />);
  await componentsReady();
  const headLineElement = getByText('Show single custom element usage');
  expect(headLineElement).toBeInTheDocument();
});
