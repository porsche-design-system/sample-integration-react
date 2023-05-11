import {
  PCheckboxWrapper,
  PText,
  PButton,
  PSelectWrapper,
  PGrid,
  PGridItem,
  PHeading,
} from '@porsche-design-system/components-react';
import { ChangeEvent, useState } from 'react';

type SelectableElement = 'text' | 'checkbox' | 'button';

const SELECTABLE_ELEMENTS: SelectableElement[] = ['text', 'checkbox', 'button'];
const SELECTABLE_COUNTS = [25, 50, 100];

export const PerformancePage = () => {
  const [element, setElement] = useState<SelectableElement>('text');
  const [count, setCount] = useState(25);
  const [shouldRender, setShouldRender] = useState(true);

  const onElementChange = (e: ChangeEvent<HTMLSelectElement>): void => setElement(e.target.value as SelectableElement);
  const onCountChange = (e: ChangeEvent<HTMLSelectElement>): void => setCount(+e.target.value);
  const onShouldRenderChange = (e: ChangeEvent<HTMLInputElement>): void => setShouldRender(e.target.checked);

  const createElement = (count: number) => {
    const children = 'Lorem Ipsum ' + count;
    switch (element) {
      case 'checkbox':
        return (
          <PCheckboxWrapper key={count} label={children}>
            <input type="checkbox" />
          </PCheckboxWrapper>
        );
      case 'button':
        return <PButton key={count} variant="primary" children={children} />;
      case 'text':
        return <PText key={count} children={children} />;
    }
  };

  return (
    <>
      <PGrid>
        <PGridItem size={12}>
          <PHeading size="medium">Choose Element and Count</PHeading>
        </PGridItem>
        <PGridItem size={4}>
          <PSelectWrapper>
            <select value={element} onChange={onElementChange}>
              {SELECTABLE_ELEMENTS.map((value) => (
                <option key={value} value={value} children={value} />
              ))}
            </select>
          </PSelectWrapper>
        </PGridItem>
        <PGridItem size={4}>
          <PSelectWrapper>
            <select value={count} onChange={onCountChange}>
              {SELECTABLE_COUNTS.map((value) => (
                <option key={value} value={value} children={value} />
              ))}
            </select>
          </PSelectWrapper>
        </PGridItem>
        <PGridItem size={4}>
          <PCheckboxWrapper label="Render">
            <input type="checkbox" onChange={onShouldRenderChange} checked={shouldRender} />
          </PCheckboxWrapper>
        </PGridItem>
      </PGrid>
      <PGrid style={{ marginTop: '2rem' }}>
        <PGridItem size={12}>{shouldRender && Array.from(Array(count)).map((value, i) => createElement(i))}</PGridItem>
      </PGrid>
    </>
  );
};
