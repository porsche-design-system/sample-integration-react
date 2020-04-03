import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ComponentsCollection } from "./pages/ComponentsCollection";
import { Forms } from "./pages/Forms";

jest.mock('@porsche-design-system/components-react', () => {

    const {PHeadlineMock, PIconMock, PButtonMock, PButtonPureMock, PDividerMock, PGridMock, PGridItemMock, PFlexMock, PFlexItemMock, PSelectWrapperMock, PCheckboxWrapperMock, PRadioButtonWrapperMock, PTextareaWrapperMock, PTextFieldWrapperMock, PLinkMock, PLinkPureMock, PSpinnerMock, PPaginationMock} = require('@porsche-design-system/components-react/dist/mocks/jest-Mocks');

    return ({
        PHeadline: PHeadlineMock,
        PIcon: PIconMock,
        PButton: PButtonMock,
        PButtonPure: PButtonPureMock,
        PDivider: PDividerMock,
        PGrid: PGridMock,
        PGridItem: PGridItemMock,
        PFlex: PFlexMock,
        PFlexItem: PFlexItemMock,
        PSelectWrapper: PSelectWrapperMock,
        PCheckboxWrapper: PCheckboxWrapperMock,
        PRadioButtonWrapper: PRadioButtonWrapperMock,
        PTextareaWrapper: PTextareaWrapperMock,
        PTextFieldWrapper: PTextFieldWrapperMock,
        PLink: PLinkMock,
        PLinkPure: PLinkPureMock,
        PSpinner: PSpinnerMock,
        PPagination: PPaginationMock
    });
});


test('renders a headline from Porsche Design System', async () => {
    const {getByText} = render(<ComponentsCollection/>);
    const submitButtonElement = getByText(/Submit/i);
    submitButtonElement.click();
    const headLineElement = getByText(/Hello/i);
    expect(headLineElement).toBeInTheDocument();
});

test('dissmisses the headline from Porsche Design System', async () => {
    const {getByText} = render(<ComponentsCollection/>);
    const submitButtonElement = getByText(/Submit/i);
    submitButtonElement.click();
    const headLineElement = getByText(/Hello/i);

    const dismissButtonElement = getByText(/Dismiss/i);
    dismissButtonElement.click();
    expect(headLineElement).not.toBeInTheDocument();
});

test('headline should be changed according the selected value', async () => {
    const {getByText, getByTestId} = render(<Forms/>)
    /*const {getByText, getByTestId} = render(<Forms/>);*/
    expect(getByText("Change this Headline by selecting")).toBeInTheDocument();
    fireEvent.change(getByTestId('select'), {target: {value: 'Headline B'}});
    expect(getByText("Headline B")).toBeInTheDocument();
    fireEvent.change(getByTestId('select'), {target: {value: 'Headline C'}});
    expect(getByText("Headline C")).toBeInTheDocument();
});

test('headline should be displayed after click on Checkbox', async () => {
    const {getByText, getByTestId} = render(<Forms/>);
    const input = getByTestId('checkbox');
    input.click();
    expect(getByText("Checkbox Works")).toBeInTheDocument();
});

test('headline should be displayed after click on RadioButton', async () => {
    const {getByText, getByTestId} = render(<Forms/>);
    const input = getByTestId('radiobutton');
    input.click();
    expect(getByText("Radio Works")).toBeInTheDocument();
});

test('headline should be changed according the typed value', async () => {
    const {getByText, getByTestId} = render(<Forms/>);
    getByText("Change this Headline by typing");
    fireEvent.change(getByTestId("input"), {target: {value: 'Headline C'}});
    getByText("Headline C");
    fireEvent.change(getByTestId("input"), {target: {value: 'Headline B'}});
    getByText("Headline B");
});

/* jsdom has some limitations. One of them is the fact that we cant change location. But we are able to test the closest href */
test('slotted Link should navigate to PDS while mocked', async () => {
    const {getByText} = render(<Forms/>);
    expect(getByText('Slotted Link').closest('a')).toHaveAttribute('href', 'https://designsystem.porsche.com')
});

test('a wrapped Link should navigate to #hashTest', async () => {
    const {getByText} = render(<ComponentsCollection/>);
    const link = getByText(/Test PLinkPure/i);
    expect(link.closest('a')).toHaveAttribute('href', '#hashTest')
});

test('a wrapped Link should navigate to #hashTest', async () => {
    const {getByText} = render(<ComponentsCollection/>);
    const link = getByText(/Test propHash/i);
    expect(link.closest('a')).toHaveAttribute('href', '#propHashTest')
});
