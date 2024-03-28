import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import type {
  SegmentedControlUpdateEvent,
  StepperHorizontalUpdateEvent,
  StepperHorizontalItemState,
} from '@porsche-design-system/components-react';
import {
  PButton,
  PButtonGroup,
  PCheckboxWrapper,
  PDivider,
  PFlex,
  PFlexItem,
  PHeading,
  PMultiSelect,
  PMultiSelectOption,
  PPinCode,
  PRadioButtonWrapper,
  PSegmentedControl,
  PSegmentedControlItem,
  PSelectWrapper,
  PStepperHorizontal,
  PStepperHorizontalItem,
  PText,
  PTextareaWrapper,
  PTextFieldWrapper,
} from '@porsche-design-system/components-react';

type StepperHorizontalItemProps = {
  state?: StepperHorizontalItemState;
  name: string;
};

export const FormsPage = (): JSX.Element => {
  const [selectValue, setSelectValue] = useState('Change this Heading by selecting');
  const [isCheckboxActive, setIsCheckboxActive] = useState(false);
  const [isRadioButtonActive, setIsRadioButtonActive] = useState(false);
  const [textFieldValue, setTextFieldValue] = useState('Change this Heading by typing');
  const [segmentedControlValue, setSegementedControlValue] = useState(1);
  const [steps, setSteps] = useState<StepperHorizontalItemProps[]>([
    {
      state: 'current',
      name: 'Enter personal details',
    },
    {
      name: 'Confirm e-mail',
    },
    {
      name: 'Set password',
    },
  ]);

  const stepContent: string[] = [
    'A form with personal details could be displayed here.',
    'A form with a verification code input field could be displayed here.',
    'A form with a password input field could be displayed here.',
  ];

  const onSegmentedControlUpdate = useCallback((e: CustomEvent<SegmentedControlUpdateEvent>) => {
    setSegementedControlValue(e.detail.value as number);
  }, []);

  const onSelectChange = useCallback((e: ChangeEvent<HTMLSelectElement>): void => {
    setSelectValue(e.target.value);
  }, []);

  const onCheckBoxInput = useCallback((e: FormEvent<HTMLInputElement>): void => {
    setIsCheckboxActive((prev) => !prev);
  }, []);

  const onRadioButtonInput = useCallback((e: FormEvent<HTMLInputElement>): void => {
    setIsRadioButtonActive(true);
  }, []);

  const onTextFieldChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    setTextFieldValue(e.target.value);
  }, []);

  const getActiveStepIndex = (steps: StepperHorizontalItemProps[]): number =>
    steps.findIndex((step) => step.state === 'current');

  const onNextPrevStep = (direction: 'next' | 'prev'): void => {
    const newState = [...steps];
    const activeStepIndex = getActiveStepIndex(newState);

    if (direction === 'next') {
      newState[activeStepIndex].state = 'complete';
      newState[activeStepIndex + 1].state = 'current';
    } else {
      delete newState[activeStepIndex].state;
      newState[activeStepIndex - 1].state = 'current';
    }

    setSteps(newState);
  };

  const handleStepUpdate = (e: CustomEvent<StepperHorizontalUpdateEvent>): void => {
    const { activeStepIndex } = e.detail;

    const newState = [...steps];
    for (let i = activeStepIndex + 1; i < newState.length; i++) {
      // reset step state when going back via stepper horizontal item click
      delete newState[i].state;
    }
    newState[activeStepIndex].state = 'current';
    setSteps(newState);
  };

  return (
    <PFlex direction="column">
      <PFlexItem>
        <PHeading size="medium">Form examples</PHeading>
      </PFlexItem>
      <PFlexItem>
        <PDivider className="divider" />
      </PFlexItem>
      <PFlexItem>
        {/*To illustrate working custom elements during the tests the selected value is displayed in the heading */}
        <PHeading size="medium">{selectValue}</PHeading>
        <form>
          <PSelectWrapper>
            <select data-testid="select" value={selectValue} onChange={onSelectChange}>
              <option value="Heading A">A</option>
              <option value="Heading B">B</option>
              <option value="Heading C">C</option>
            </select>
          </PSelectWrapper>
        </form>
      </PFlexItem>
      <PFlexItem>
        <PSegmentedControl
          style={{ marginTop: '1rem' }}
          value={segmentedControlValue}
          onUpdate={onSegmentedControlUpdate}
          aria-label="Choose an Option"
        >
          <PSegmentedControlItem value={1}>Option 1</PSegmentedControlItem>
          <PSegmentedControlItem value={2}>Option 2</PSegmentedControlItem>
          <PSegmentedControlItem value={3}>Option 3</PSegmentedControlItem>
          <PSegmentedControlItem value={4}>Option 4</PSegmentedControlItem>
          <PSegmentedControlItem value={5}>Option 5</PSegmentedControlItem>
        </PSegmentedControl>
        <PText>Current value of segmented-control: {segmentedControlValue}</PText>
      </PFlexItem>
      <PFlexItem>
        <PDivider className="divider" />
      </PFlexItem>
      <PFlexItem>
        <PStepperHorizontal onUpdate={handleStepUpdate}>
          {steps.map(({ state, name }) => (
            <PStepperHorizontalItem key={name} state={state}>
              {name}
            </PStepperHorizontalItem>
          ))}
        </PStepperHorizontal>

        {stepContent.map((content, i) => getActiveStepIndex(steps) === i && <PText key={i}>{content}</PText>)}

        <PButtonGroup>
          <PButton
            icon="arrow-head-left"
            variant="secondary"
            onClick={() => onNextPrevStep('prev')}
            disabled={getActiveStepIndex(steps) === 0}
          >
            Previous Step
          </PButton>

          <PButton
            variant="primary"
            disabled={getActiveStepIndex(steps) === steps.length - 1}
            onClick={() => onNextPrevStep('next')}
          >
            Next Step
          </PButton>
        </PButtonGroup>
      </PFlexItem>
      <PFlexItem>
        <PDivider className="divider" />
      </PFlexItem>
      <PFlexItem>
        {/*Checking the Checkbox makes the heading appear*/}
        {isCheckboxActive && <PHeading size="medium">Checkbox Works</PHeading>}
        <PCheckboxWrapper label="Some label">
          <input data-testid="checkbox" type="checkbox" name="TestBox" onInput={onCheckBoxInput} />
        </PCheckboxWrapper>
      </PFlexItem>
      <PFlexItem className="contentWrapperSmall">
        {/* Clicking the Radiobutton makes the heading appear*/}
        {isRadioButtonActive && <PHeading size="medium">Radio Works</PHeading>}
        <PRadioButtonWrapper label="Some label">
          <input data-testid="radiobutton" type="radio" name="RadioButton" onInput={onRadioButtonInput} />
        </PRadioButtonWrapper>
      </PFlexItem>
      <PFlexItem>
        <PDivider className="divider" />
      </PFlexItem>
      <PFlexItem>
        <form>
          <PTextareaWrapper label="Test TextArea">
            <textarea name="Testarea"></textarea>
          </PTextareaWrapper>
        </form>
      </PFlexItem>
      <PFlexItem className="contentWrapperSmall">
        {/*The heading changes according to the text field input*/}
        <PHeading size="medium">{textFieldValue}</PHeading>
        <PTextFieldWrapper label="Test TextField">
          <input data-testid="input" type="text" name="Textfield" onChange={onTextFieldChange} />
        </PTextFieldWrapper>
      </PFlexItem>
      <PFlexItem className="contentWrapperSmall">
        <form>
          <PFlex>
            <PFlexItem>
              <PTextFieldWrapper>
                {/*Example of slotted links*/}
                <span slot="label">
                  Some label with a <a href="https://designsystem.porsche.com">Slotted Link</a>.
                </span>
                <input type="text" aria-invalid={true} name="some-name" onChange={onTextFieldChange} />
              </PTextFieldWrapper>
            </PFlexItem>
          </PFlex>
        </form>
      </PFlexItem>
      <PFlexItem className="contentWrapperSmall">
        <PPinCode label="Default" />
        <PPinCode label="Type password" type="password" />
      </PFlexItem>
      <PFlexItem className="contentWrapperSmall">
        <PMultiSelect name="name" label="Some Label" description="Some description" theme="light" required>
          <PMultiSelectOption value="a">Option A</PMultiSelectOption>
          <PMultiSelectOption value="b">Option B</PMultiSelectOption>
          <PMultiSelectOption value="c">Option C</PMultiSelectOption>
          <PMultiSelectOption value="d">Option D</PMultiSelectOption>
          <PMultiSelectOption value="e">Option E</PMultiSelectOption>
          <PMultiSelectOption value="f">Option F</PMultiSelectOption>
        </PMultiSelect>
      </PFlexItem>
    </PFlex>
  );
};
