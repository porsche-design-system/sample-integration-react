# Sample integration of the Porsche Design System into a react application

## Prerequisites
* Current node version installed (>= 12.16.0)
* Access to either Porsche UI or MyPorsche artifactory npm repository  
  For MyPorsche artifactory please replace the `.npmrc` with the
  `.npmrc.myporsche` file.
* Ensure that you're authenticated to the artifactory registry.  
  You can check it via:  
  ```
  npm whoami --registry=https://porscheui.jfrog.io/porscheui/api/npm/npm/
  ```  
  or for MyPorsche:  
  ```
  npm whoami --registry=https://porschedev.jfrog.io/porschedev/api/npm/public-npm/
  ```

## Get the project up and running
* Install dependencies via `npm install`
* Run tests via `npm test`
* Run the application via `npm start`
* Build the application via `npm run build`

## Steps to reproduce on your own
* Run `npx create-react-app .` to init a new react application in the current directory  
  https://github.com/facebook/create-react-app
* Create `.npmrc` file to tell npm from which registry you want to install the Porsche Design System
  package:  
  ```
  always-auth = true
  @porsche-design-system:registry = https://porscheui.jfrog.io/porscheui/api/npm/npm/
  ```
  If you want to use the MyPorsche registry use instead:
  ```
  always-auth = true
  registry = https://porschedev.jfrog.io/porschedev/api/npm/public-npm/
  ```
* Install the Porsche Design System `npm install @porsche-design-system/components-react`
  https://designsystem.porsche.com/latest/#/web/getting-started/start-coding
* Change `src/App.js` to use at least one Porsche Design System component, for example:
  ```
  import React from 'react';
  import { PHeadline, PIcon } from '@porsche-design-system/components-react';
  
  function App() {
    return (
      <div className="App">
        <PHeadline>Hello</PHeadline>
        <PIcon name="delete"></PIcon>
      </div>
    );
  }
  
  export default App;
  ```
* Run the application ```npm start``` and check the page if the components are shown correctly
* Update jest configuration in `package.json` to add the Porsche Design System module to the `transformIgnorePatterns`:
  ```
  [...]
  "jest": {
      "transformIgnorePatterns": [
      "node_modules/(?!(@porsche-design-system)/)"
    ]
  }
  [...]
  ```  
  https://jestjs.io/docs/en/configuration
* Update tests for `src/App.js` in `src/App.test.js` to the new application code, for example:
  ```
  import React from 'react';
  import { render } from '@testing-library/react';
  import App from './App';
  
  test('renders a headline from Porsche Design System', () => {
    const { getByText } = render(<App />);
    const headLineElement = getByText(/Hello/i);
    expect(headLineElement).toBeInTheDocument();
  });
  ```
* Run tests via `npm test` to verify that it's working
* Cleanup unused files remove `src/App.css` and `src/logo.svg` and remove contents from `src/index.css`
