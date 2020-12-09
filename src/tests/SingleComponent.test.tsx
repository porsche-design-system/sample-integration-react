import { render } from '@testing-library/react';
import React from 'react';
import { SingleComponent } from '../components';
import { componentsReady } from '@porsche-design-system/components-react';

test('renders a headline from Porsche Design System', async () => {
  const { getByText } = render(<SingleComponent />);
  await componentsReady();
  const headLineElement = getByText('Show single mock usage');
  expect(headLineElement).toBeInTheDocument();
});
