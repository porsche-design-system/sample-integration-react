import React, { useCallback, useState } from 'react';
import { PButton } from '@porsche-design-system/components-react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const StyleReplace: React.FC = () => {
  const [state, setState] = useState<boolean>(false);
  const handleOnClick = useCallback(() => {
    setTimeout(() => {
      setState(true);
    }, 100);
  }, []);
  return (
    <>
      <PButton onClick={handleOnClick}>BUTTON</PButton>
      {String(state)}
    </>
  );
};

it('style.replace is not a function', async () => {
  render(<StyleReplace />);
  userEvent.click(screen.getByText('BUTTON'));
  await waitFor(() => {
    screen.getByText('true');
  });
});
