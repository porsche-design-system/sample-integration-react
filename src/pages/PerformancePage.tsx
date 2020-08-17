import { PCheckboxWrapper, PText } from '@porsche-design-system/components-react';
import React from 'react';
interface SelectOption {
  key: string;
  name: string;
}
interface MultiSelectProps {
  options: SelectOption[];
  value?: string[];
}
const PMultiSelect: React.FunctionComponent<MultiSelectProps> = ({ options }) => (
  <>
    {options.map((option: SelectOption) => (
      <PCheckboxWrapper key={option.key} label={option.name}>
        <input type="checkbox" id={option.key} name={option.key} title={option.name} />
      </PCheckboxWrapper>
    ))}
  </>
);
const MultiSelect: React.FunctionComponent<MultiSelectProps> = ({ options }) => (
  <>
    {options.map((option) => (
      <React.Fragment key={option.key}>
        <input type="checkbox" id={option.key} name={option.key} title={option.name} />
        <label>{option.name}</label>
      </React.Fragment>
    ))}
  </>
);
const options = [
  { name: '911', key: '911' },
  { name: '718 / Boxster / Cayman', key: '718' },
];
const value: string[] = [];

export const PerformancePage = () => (
  <>
    {/* Components with PCheckboxWrapper */}
    {Array.from(Array(20)).map((i) => (
      <PMultiSelect key={'P' + i} options={options} value={value} />
    ))}
{/*    {Array.from(Array(20)).map((i) => (
        <PText key={'P' + i} children={'Lorem Ipsum'} />
    ))}*/}




    {/* Components without PCheckboxWrapper */}
    {Array.from(Array(20)).map((i) => (
      <MultiSelect key={'M' + i} options={options} value={value} />
    ))}
  </>
);
