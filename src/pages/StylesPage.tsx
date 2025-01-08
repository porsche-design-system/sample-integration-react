import { JSX } from 'react';
import { buttonStyle } from './vanilla-extract.css';

export const StylesPage = (): JSX.Element => {
  return (
    <>
      <p>Vanilla Extract Test</p>
      <button className={buttonStyle}>Button with hover and focus style</button>
    </>
  );
};
