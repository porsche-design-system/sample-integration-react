import { render } from '@testing-library/react';
import React from 'react';
import { SingleComponent } from './pages/SingleComponent';


jest.mock('@porsche-design-system/components-react', () => {
    return require('@porsche-design-system/components-react/dist/mocks/p-headline-mock');
});

test('renders a headline from Porsche Design System', async () => {
    const {getByText} = render(<SingleComponent/>);
    const headLineElement = getByText('Show single mock usage');
    expect(headLineElement).toBeInTheDocument();
});
