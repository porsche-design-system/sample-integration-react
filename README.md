# React - Sample integration with Porsche Design System

## Introduction

This is project shows the example usage of the Porsche Design System Components in React. 
See also the [project documentation](https://designsystem.porsche.com/v1/#/start-coding/react) and the [deployed project](https://porscheui.github.io/sample-integration-react).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Setup

### Requirements
* [Node.js](https://nodejs.org)
* [Yarn](https://yarnpkg.com)
* [Docker](https://www.docker.com) ([see below](#docker-installation-steps))

### Getting started
1. Clone [`sample-integration-react` repository](https://github.com/porscheui/porsche-sample-integration-react)
1. Switch to __project root directory__
1. Execute command `npm login --registry=https://porscheui.jfrog.io/porscheui/api/npm/npm/`
1. Enter username, password (Artifactory API Key, __not__ Artifactory password!) and e-mail address when asked in terminal
1. Execute `cat ~/.npmrc`, find following line `//porscheui.jfrog.io/porscheui/api/npm/npm/:_authToken=` and copy the generated _npm registry token_ from the file to your clipboard
1. Create an `.env` file within __project root directory__ (never push this file to Git because it will contain secrets – by default it's ignored by `.gitignore`)
1. Add _npm registry token_ in following format `PORSCHE_NPM_REGISTRY_TOKEN=YOUR_TOKEN_GOES_HERE`
1. Make sure that Docker app is running
1. Run `./docker.sh run-install` - this may take up to several minutes at first start depending on your internet connection

*Note: `./docker.sh run-install` should be executed after every pull.*

### Docker installation steps
1. Register your Docker account on [Hub-Docker](https://hub.docker.com)
1. Download Docker app locally on your machine and login
1. Start Docker

### Start
1. Switch to __project root directory__
1. Run `./docker.sh run-start` (starts test server for sample-integration-react itself)

### Build
1. Switch to __project root directory__
1. Run `./docker.sh run-build` (builds releasable sample-integration-react npm package)

### Test
1. Switch to __project root directory__
1. Run `./docker.sh run-test` (executes test for sample-integration-react)

## About Testing

**Jest** uses **jsdom**. It is not yet possible to render web components via jsdom. 

To ensure your tests dont fail, we provide mocks for every Porsche Design System Component. 
They are consumed in the **setupTest.ts** file in the root folder.

```
setupTest.ts

jest.mock('@porsche-design-system/components-react', () => {
    return require('@porsche-design-system/components-react/mocks');
});
```
We have to access the mocks in the Mock-Factory of the `jest.mock()` function. We have to use `require` because the mock factory doesn't allow otherwise. 

If you only need a single component mock you can also consume the mock directly in your test. All of the mocks are named like **p-name-mock** for example **p-headline-mock**.

```
SingleComponent.tsx

export function SingleComponent() {

    return (
        <PHeadline>Show single mock usage</PHeadline>
    )
}

------
SingleComponent.test.tsx

jest.mock('@porsche-design-system/components-react', () => {
    return require('@porsche-design-system/components-react/mocks/p-headline-mock');
});

test('renders a headline from Porsche Design System', async () => {
    const {getByText} = render(<SingleComponent/>);
    const headLineElement = getByText('Show single mock usage');
    expect(headLineElement).toBeInTheDocument();
});
```

Use this solution until **Creat React App** upgrades to a newer **jsdom** version, which
provides support for **webcomponents**. In the meantime we keep providing mocks.
 
You find detailed information on how to use mock functions in jest [here](https://jestjs.io/docs/en/mock-functions.html).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
