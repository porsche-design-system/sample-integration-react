import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { App } from './App';
import { applyPolyfills, defineCustomElements as definePorscheNavigation } from '@porschehn/navigation/loader';

ReactDOM.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
  document.getElementById('root')
);

applyPolyfills().then(() => {
  definePorscheNavigation(window);
});
