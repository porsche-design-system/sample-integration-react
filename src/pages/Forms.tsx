import React, { ChangeEvent, FormEvent, useState } from 'react';
import {
    PCheckboxWrapper,
    PDivider,
    PFlex,
    PFlexItem,
    PHeadline,
    PRadioButtonWrapper,
    PSelectWrapper,
    PTextareaWrapper,
    PTextFieldWrapper
} from "@porsche-design-system/components-react";


export function Forms() {
    const [select, setSelect] = useState('Change this Headline by selecting');
    const [checkBox, setCheckBox] = useState(false);
    const [radioButton, setRadioButton] = useState(false);
    const [textField, setTextField] = useState('Change this Headline by typing');

    const handleSelect = (e: ChangeEvent<HTMLSelectElement>): void => {
        setSelect(e.target.value)
    };

    const handleCheckBox = (e: FormEvent<HTMLFormElement>): void => {
        if (checkBox) {
            setCheckBox(false)
        } else {
            setCheckBox(true)
        }
    };

    const handleRadioButton = (e: FormEvent<HTMLFormElement>): void => {
        setRadioButton(true)
    };

    const handleTextField = (e: ChangeEvent<HTMLInputElement>): void => {
        setTextField(e.target.value)
    };

    return (
        <PFlex direction={"column"}>
            <PFlexItem>
                <PHeadline variant={"headline-3"}>Form examples</PHeadline>
            </PFlexItem>
            <PFlexItem>
                <PDivider className={'divider'}/>
            </PFlexItem>
            <PFlexItem>
                {/*To illustrate the mock procedure during the tests the selected value is displayed in the headline */}
                <PHeadline variant={"headline-4"}>{select}</PHeadline>
                <form>
                    <PSelectWrapper>
                        <select data-testid="select" value={select}
                                onChange={e => handleSelect(e)}>
                            <option value={"Headline A"}>A</option>
                            <option value={"Headline B"}>B</option>
                            <option value={"Headline C"}>C</option>
                        </select>
                    </PSelectWrapper>
                </form>
            </PFlexItem>
            <PFlexItem>
                <PDivider className={'divider'}/>
            </PFlexItem>
            <PFlexItem>
                {/*Checking the Checkbox makes the headline appear*/}
                {checkBox ? <PHeadline variant={"headline-4"}>Checkbox Works</PHeadline> : ''}
                <form onInput={e => handleCheckBox(e)}>
                    <PCheckboxWrapper label={"Some label"} hideLabel={false}>
                        <input data-testid="checkbox" type={"checkbox"} name={"TestBox"}></input>
                    </PCheckboxWrapper>
                </form>
            </PFlexItem>
            <PFlexItem className={'contentWrapperSmall'}>
                {/* Clicking the Radiobutton makes the headline appear*/}
                {radioButton ? <PHeadline variant={"headline-4"}>Radio Works</PHeadline> : ''}
                <form onInput={e => handleRadioButton(e)}>
                    <PRadioButtonWrapper label={"Some label"} hideLabel={false}>
                        <input data-testid="radiobutton" type={"radio"} name={"RadioButton"}></input>
                    </PRadioButtonWrapper>
                </form>
            </PFlexItem>
            <PFlexItem>
                <PDivider className={'divider'}/>
            </PFlexItem>
            <PFlexItem>
                <form>
                    <PTextareaWrapper label={"Test TextArea"} hideLabel={false}>
                        <textarea name={"Testarea"}></textarea>
                    </PTextareaWrapper>
                </form>
            </PFlexItem>
            <PFlexItem className={'contentWrapperSmall'}>
                {/*The headline changes according to the textfield input*/}
                <PHeadline variant={"headline-4"}>{textField}</PHeadline>
                <form>
                    <PTextFieldWrapper label={"Test TextField"} hideLabel={false}>
                        <input data-testid="input" type={"text"} name={"Textfield"}
                               onChange={e => handleTextField(e)}></input>
                    </PTextFieldWrapper>
                </form>
            </PFlexItem>
            <PFlexItem className={'contentWrapperSmall'}>
                <form>
                    <PFlexItem>
                        <PTextFieldWrapper>
                            {/*Example of slotted links*/}
                            <span slot={"label"}>Some label with a <a data-testid="slottedHref"
                                                                      href={"https://designsystem.porsche.com"}>Slotted Link</a>.</span>
                            <input data-testid="slottedInput" type={"text"} aria-invalid={true}
                                   name={"some-name"} onChange={e => handleTextField(e)}></input>
                        </PTextFieldWrapper>
                    </PFlexItem>
                </form>
            </PFlexItem>
        </PFlex>
    );
}
