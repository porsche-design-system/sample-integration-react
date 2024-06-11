import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import { StrictMode } from 'react';
import {createRoot} from 'react-dom/client';
import { App } from './App';
import { applyPolyfills, defineCustomElements as definePorscheNavigation } from '@porschehn/navigation/loader';
import { PorscheDesignSystemProvider } from '@porsche-design-system/components-react'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
  <PorscheDesignSystemProvider>
    <App />
  </PorscheDesignSystemProvider>
  </StrictMode>
);

applyPolyfills().then(() => {
  definePorscheNavigation(window);
});
