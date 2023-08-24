// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import '@porsche-design-system/components-react/jsdom-polyfill';

// to silence deprecation warnings
jest.spyOn(console, 'warn').mockImplementation();
