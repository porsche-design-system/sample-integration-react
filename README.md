# React - Sample integration with Porsche Design System

## Introduction

This is project shows the example usage of the Porsche Design System Components in React. See also the [project documentation](https://designsystem.porsche.com/latest/#/start-coding/react) and the [deployed sample project](https://porscheui.github.io/sample-integration-react).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Setup

### Requirements

- [Node.js](https://nodejs.org)
- [Yarn](https://yarnpkg.com)
- [Docker](https://www.docker.com) ([see below](#docker-installation-steps))

### Getting started

1. Clone [`sample-integration-react` repository](https://github.com/porscheui/porsche-sample-integration-react)
1. Switch to **project root directory**
1. Execute command `npm login --registry=https://porscheui.jfrog.io/porscheui/api/npm/npm/`
1. Enter username, password (Artifactory API Key, **not** Artifactory password!) and e-mail address when asked in terminal
1. Execute `cat ~/.npmrc`, find following line `//porscheui.jfrog.io/porscheui/api/npm/npm/:_authToken=` and copy the generated _npm registry token_ from the file to your clipboard
1. Create an `.env` file within **project root directory** (never push this file to Git because it will contain secrets – by default it's ignored by `.gitignore`)
1. Add _npm registry token_ in following format `PORSCHE_NPM_REGISTRY_TOKEN=YOUR_TOKEN_GOES_HERE`
1. Make sure that Docker app is running
1. Run `./docker.sh run-install` - this may take up to several minutes at first start depending on your internet connection

_Note: `./docker.sh run-install` should be executed after every pull._

### Setup prettier

1. Go to Webstorm `Preferences`
1. Click on the Plugins tab and search for `prettier`
1. Install prettier
1. In `Preferences` go to `Languages and Frameworks` -> `Javascript` -> `Prettier`
1. Set `Prettier Package` to `{PATH_TO_YOUR_DIRECTORY}/node_modules/prettier`
1. Change `Run for files` to `{**/*,*}.{js,ts,jsx,tsx,vue,scss,json,css,html}`
1. Click checkbox `on save` and apply
1. You should be good to go.

### Docker installation steps

1. Register your Docker account on [Hub-Docker](https://hub.docker.com)
1. Download Docker app locally on your machine and login
1. Start Docker

### Start

1. Switch to **project root directory**
1. Run `./docker.sh run-start` (starts test server for sample-integration-react itself)

### Build

1. Switch to **project root directory**
1. Run `./docker.sh run-build` (builds releasable sample-integration-react npm package)

### Test

1. Switch to **project root directory**
1. Run `./docker.sh run-test` (executes test for sample-integration-react)

## About Testing

Have a look at [Test the application](https://designsystem.porsche.com/latest/#/start-coding/react)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
