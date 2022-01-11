import { componentsReady, PButtonPure } from '@porsche-design-system/components-react';
import { renderWithProvider } from './helper';

fit('xy', async () => {
  renderWithProvider(<PButtonPure alignLabel="left">Ok</PButtonPure>);
  await componentsReady();

  expect(true).toBe(true);
});
