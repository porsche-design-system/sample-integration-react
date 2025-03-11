import { JSX } from 'react';
import {
  buttonStyle,
  Heading,
  MediaQueryMax,
  MediaQueryMin,
  MediaQueryMinMax,
  skeletonStyle,
  Wrapper,
} from './vanilla-extract.css';

export const StylesPage = (): JSX.Element => {
  return (
    <>
      <p>Vanilla Extract Test</p>
      <button className={buttonStyle}>Button with hover and focus style</button>
      <div className={skeletonStyle}>Skeleton style</div>
      <div className={Wrapper}>
        <h3 className={Heading}>Media Query (change viewport to see effect)</h3>
        <p className={MediaQueryMin}>Media Query Min:</p>
        <p className={MediaQueryMax}>Media Query Max:</p>
        <p className={MediaQueryMinMax}>Media Query Min Max:</p>
      </div>
    </>
  );
};
