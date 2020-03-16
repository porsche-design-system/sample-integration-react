import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import App from './App';

jest.mock('@porsche-design-system/components-react', () => ({
    PHeadline: props => <mock-PHeadline>{props.children}</mock-PHeadline>,
    PIcon: () => <mock-PIcon></mock-PIcon>,
    PButton: props => <button>{props.children}</button>,
    PButtonPure: props => <button>{props.children}</button>,
    PGrid: props => <div>{props.children}</div>,
    PGridItem: props => <div>{props.children}</div>,
    PFlex: props => <div>{props.children}</div>,
    PFlexItem: props => <div>{props.children}</div>,
    PSelectWrapper: props => <mock-PSelectWrapper>{props.children}</mock-PSelectWrapper>,
    PCheckboxWrapper: props => <mock-PCheckboxWrapper>{props.children}</mock-PCheckboxWrapper>,
    PRadioButtonWrapper: props => <mock-PRadioButtonWraper>{props.children}</mock-PRadioButtonWraper>,
    PTextareaWrapper: () => <mock-PTextareaWrapper></mock-PTextareaWrapper>,
    PTextFieldWrapper: props => <mock-PTextFieldWrapper>{props.children}</mock-PTextFieldWrapper>,
    PLink: () => <mock-PLink></mock-PLink>,
    PLinkPure: () => <mock-PLinkPure></mock-PLinkPure>,
    PSpinner: () => <mock-PSpinner></mock-PSpinner>,
    PPagination: props => <mock-Pagination>{props.children}</mock-Pagination>
}));

test('renders a headline from Porsche Design System', async () => {
    const {getByText} = render(<App/>);
    const submitButtonElement = getByText(/Submit/i);
    submitButtonElement.click();
    const headLineElement = getByText(/Hello/i);
    expect(headLineElement).toBeInTheDocument();
});

test('dissmisses the headline from Porsche Design System', async () => {
    const {getByText} = render(<App/>);
    const submitButtonElement = getByText(/Submit/i);
    submitButtonElement.click();
    const headLineElement = getByText(/Hello/i);

    const dismissButtonElement = getByText(/Dismiss/i);
    dismissButtonElement.click();
    expect(headLineElement).not.toBeInTheDocument();
});

test('headline should be changed according the selected value', async () => {
    const {getByText, getByTestId} = render(<App/>);
    expect(getByText("Change this Headline by selecting")).toBeInTheDocument();
    fireEvent.change(getByTestId("select", { target: { value: 'Headline B' } }));
    expect(getByText("Headline B")).toBeInTheDocument();
    fireEvent.change(getByTestId("select", { target: { value: 'Headline C' } }));
    expect(getByText("Headline C")).toBeInTheDocument();
});

test('headline should be displayed after click on Checkbox', async () => {
    const {getByText, getByTestId} = render(<App/>);
    const input = getByTestId('checkbox');
    input.click();
    expect(getByText("Checkbox Works")).toBeInTheDocument();
});

test('headline should be displayed after click on RadioButton', async () => {
    const {getByText, getByTestId} = render(<App/>);
    const input = getByTestId('radiobutton');
    input.click();
    expect(getByText("Radio Works")).toBeInTheDocument();
});

test('headline should be changed according the typed value', async () => {
    const {getByText, getByTestId} = render(<App/>);
    expect(getByText("Change this Headline by typing")).toBeInTheDocument();
    fireEvent.change(getByTestId("input", { target: { value: 'Headline A' } }));
    expect(getByText("Headline A")).toBeInTheDocument();
    fireEvent.change(getByTestId("select", { target: { value: 'Headline B' } }));
    expect(getByText("Headline B")).toBeInTheDocument();
});