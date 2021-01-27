import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { applyPolyfills, defineCustomElements as definePorscheNavigation } from '@porschehn/navigation/loader';
import { PorscheDesignSystemProvider } from '@porsche-design-system/components-react'

ReactDOM.render(
  <StrictMode>
  <PorscheDesignSystemProvider>
    <App />
  </PorscheDesignSystemProvider>
  </StrictMode>,
  document.getElementById('root')
);

applyPolyfills().then(() => {
  definePorscheNavigation(window);
});
