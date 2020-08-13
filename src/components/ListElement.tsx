import React from 'react';
import {
  PGrid,
  PGridItem,
  PDivider,
  PCheckboxWrapper,
  PIcon,
  PText,
  PSelectWrapper,
  PRadioButtonWrapper,
  PButton,
} from '@porsche-design-system/components-react';

type Props = { text: string };

export const ListElement = ({ text }: Props): JSX.Element => {
  return (
    <>
      <PGrid>
        <PGridItem size={2}>
          <img src={process.env.PUBLIC_URL + `/img/${(+text % 5) + 1}.jpg`} style={{ width: '100%' }} />
          <PText>#{text}</PText>
        </PGridItem>
        <PGridItem size={2}>
          <PIcon name={'360'} aria-label={'360 icon'} />
        </PGridItem>
        <PGridItem size={2}>
          <PCheckboxWrapper label={`#${text} Label`}>
            <input type={'checkbox'} name={`#${text} Label`} />
          </PCheckboxWrapper>
        </PGridItem>
        <PGridItem size={2}>
          <PRadioButtonWrapper label={`#${text} Label`}>
            <input type={'radio'} name={`#${text} Label`} />
          </PRadioButtonWrapper>
        </PGridItem>
        <PGridItem size={2}>
          <PButton>#{text} Label</PButton>
        </PGridItem>
        <PGridItem size={2}>
          <PSelectWrapper label={`#${text} Label`}>
            <select name={'some-name'}>
              <option value={'a'}>Option A</option>
              <option value={'b'}>Option B</option>
              <option value={'c'}>Option C</option>
            </select>
          </PSelectWrapper>
        </PGridItem>
      </PGrid>
      <PDivider />
    </>
  );
};
