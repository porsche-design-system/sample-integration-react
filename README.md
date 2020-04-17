This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Introduction

This is project shows the example usage of the Porsche Design System Components in react. 
Documentation about the project and information about Porsche Design System you can find [here](https://designsystem.porsche.com/v1/#/start-coding/example-project-react)

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

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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
