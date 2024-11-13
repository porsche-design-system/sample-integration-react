import { vi } from 'vitest';
import '@testing-library/jest-dom';
import '@porsche-design-system/components-react/jsdom-polyfill';

beforeAll(() => {
  // Mock for the Dialog API
  HTMLDialogElement.prototype.show = vi.fn();
  HTMLDialogElement.prototype.showModal = vi.fn();
  HTMLDialogElement.prototype.close = vi.fn();

  // Mock for the Element Internals API
  HTMLElement.prototype.attachInternals = vi.fn(
    () =>
      ({
        setFormValue: vi.fn(),
        setValidity: vi.fn(),
      }) as ElementInternals
  );
});
