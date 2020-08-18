import {
  PCheckboxWrapper,
  PText,
  PButton,
  PSelectWrapper,
  PGrid,
  PGridItem,
  PHeadline,
} from '@porsche-design-system/components-react';
import React, { ChangeEvent, useState } from 'react';

export const PerformancePage = () => {
  const [element, setElement] = useState('text');
  const [count, setCount] = useState(25);

  const changeElement = (e: ChangeEvent<HTMLSelectElement>): void => {
    setElement(e.target.value);
  };

  const changeCount = (e: ChangeEvent<HTMLSelectElement>): void => {
    setCount(+e.target.value);
  };

  const chooseElement = (count?: number) => {
    if (element === 'checkbox') {
      return (
        <PCheckboxWrapper key={count} label={element + ' ' + count}>
          <input type="checkbox" title={element + count} />
        </PCheckboxWrapper>
      );
    } else if (element === 'button') {
      return (
        <PButton variant="primary" key={'P' + count}>
          Lorem Ipsum {count}
        </PButton>
      );
    } else return <PText key={'P' + count} children={'Lorem Ipsum ' + count} />;
  };

  return (
    <>
      <PGrid>
        <PGridItem size="12">
          <PHeadline variant="headline-4">Choose Element and Count</PHeadline>
        </PGridItem>
        <PGridItem size="4">
          <PSelectWrapper>
            <select value={element} onChange={(e) => changeElement(e)}>
              <option value="text">text</option>
              <option value="checkbox">checkbox</option>
              <option value="button">button</option>
            </select>
          </PSelectWrapper>
        </PGridItem>
        <PGridItem size="4">
          <PSelectWrapper>
            <select value={count} onChange={(e) => changeCount(e)}>
              <option value="0">0</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </PSelectWrapper>
        </PGridItem>
      </PGrid>
      <PGrid style={{ marginTop: '2rem' }}>
        <PGridItem size="4">
          {Array.from(Array(count)).map((value, i) => chooseElement(i))}
        </PGridItem>
      </PGrid>
    </>
  );
};
