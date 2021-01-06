import { color, text } from '@porsche-design-system/utilities';
import './UtilitiesPage.scss';

/**
 * Test site to see if utilities package works
 */
export const UtilitiesPage = (): JSX.Element => {
  return (
    <>
      <div style={text.medium}>JS utilities</div>
      <div style={{ width: 50, height: 50, background: color.brand }} />
      <div className="textSizeMedium">Scss utilities</div>
      <div style={{ width: 50, height: 50 }} className="backgroundColorPds" />
    </>
  );
};
