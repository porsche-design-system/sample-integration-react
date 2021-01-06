import { render } from '@testing-library/react';
import { Sample } from '../components';
import { componentsReady } from '@porsche-design-system/components-react';

test('renders a headline from Porsche Design System', async () => {
  const { getByText } = render(<Sample />);
  await componentsReady();
  const headLineElement = getByText('Show single custom element usage');
  expect(headLineElement).toBeInTheDocument();
});
