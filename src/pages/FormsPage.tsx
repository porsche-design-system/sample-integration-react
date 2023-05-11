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
  PFlexItem, PHeading,
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
  const [select, setSelect] = useState('Change this Heading by selecting');
  const [checkBox, setCheckBox] = useState(false);
  const [radioButton, setRadioButton] = useState(false);
  const [textField, setTextField] = useState('Change this Heading by typing');
  const [currentValue, setCurrentValue] = useState(1);
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
    setCurrentValue(e.detail.value as number);
  }, []);

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>): void => {
    setSelect(e.target.value);
  };

  const handleCheckBox = (e: FormEvent<HTMLInputElement>): void => {
    if (checkBox) {
      setCheckBox(false);
    } else {
      setCheckBox(true);
    }
  };

  const handleRadioButton = (e: FormEvent<HTMLInputElement>): void => {
    setRadioButton(true);
  };

  const handleTextField = (e: ChangeEvent<HTMLInputElement>): void => {
    setTextField(e.target.value);
  };

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
        <PHeading size="medium">{select}</PHeading>
        <form>
          <PSelectWrapper>
            <select data-testid="select" value={select} onChange={(e) => handleSelect(e)}>
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
          value={currentValue}
          onUpdate={onSegmentedControlUpdate}
          aria-label="Choose an Option"
        >
          <PSegmentedControlItem value={1}>Option 1</PSegmentedControlItem>
          <PSegmentedControlItem value={2}>Option 2</PSegmentedControlItem>
          <PSegmentedControlItem value={3}>Option 3</PSegmentedControlItem>
          <PSegmentedControlItem value={4}>Option 4</PSegmentedControlItem>
          <PSegmentedControlItem value={5}>Option 5</PSegmentedControlItem>
        </PSegmentedControl>
        <PText>Current value of segmented-control: {currentValue}</PText>
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
        {checkBox ? <PHeading size="medium">Checkbox Works</PHeading> : ''}
        <PCheckboxWrapper label="Some label" hideLabel={false}>
          <input data-testid="checkbox" type="checkbox" name="TestBox" onInput={(e) => handleCheckBox(e)} />
        </PCheckboxWrapper>
      </PFlexItem>
      <PFlexItem className="contentWrapperSmall">
        {/* Clicking the Radiobutton makes the heading appear*/}
        {radioButton ? <PHeading size="medium">Radio Works</PHeading> : ''}
        <PRadioButtonWrapper label="Some label" hideLabel={false}>
          <input data-testid="radiobutton" type="radio" name="RadioButton" onInput={(e) => handleRadioButton(e)} />
        </PRadioButtonWrapper>
      </PFlexItem>
      <PFlexItem>
        <PDivider className="divider" />
      </PFlexItem>
      <PFlexItem>
        <form>
          <PTextareaWrapper label="Test TextArea" hideLabel={false}>
            <textarea name="Testarea"></textarea>
          </PTextareaWrapper>
        </form>
      </PFlexItem>
      <PFlexItem className="contentWrapperSmall">
        {/*The heading changes according to the text field input*/}
        <PHeading size="medium">{textField}</PHeading>
        <PTextFieldWrapper label="Test TextField" hideLabel={false}>
          <input data-testid="input" type="text" name="Textfield" onChange={(e) => handleTextField(e)} />
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
                <input type="text" aria-invalid={true} name="some-name" onChange={(e) => handleTextField(e)} />
              </PTextFieldWrapper>
            </PFlexItem>
          </PFlex>
        </form>
      </PFlexItem>
    </PFlex>
  );
};
