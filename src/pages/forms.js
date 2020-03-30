import React from 'react';
import {
    PCheckboxWrapper,
    PFlex,
    PFlexItem,
    PHeadline,
    PRadioButtonWrapper,
    PSelectWrapper, PTextareaWrapper, PTextFieldWrapper
} from "@porsche-design-system/components-react";

export class Forms extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectValue: 'Change this Headline by selecting',
            textFieldValue: 'Change this Headline by typing',
            checked: false,
            radioChecked: false,
            activePage: 1,
            pageChangeCount: 0,
        };
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
        this.handleChangeTextField = this.handleChangeTextField.bind(this);
    }

    pageChange(event) {
        const page = event.detail.page;
        this.setState({
            activePage: page,
            pageChangeCount: this.state.pageChangeCount + 1
        });
    }

    check(event) {
        event.nativeEvent.preventDefault();
        this.setState({
            checked: true
        });
    }

    radioCheck(event) {
        event.nativeEvent.preventDefault();
        this.setState({
            radioChecked: true
        });
    }

    handleChangeSelect(event) {
        this.setState({selectValue: event.target.value})
    }

    handleChangeTextField(event) {
        this.setState({textFieldValue: event.target.value})
    }

    getHeadline(stateValue) {
        const headline = stateValue;
        return headline;
    }

    render() {

        return (
            <PFlex direction={"column"}>
                <PFlexItem>
                    <PHeadline variant={"headline-3"}>Form examples</PHeadline>
                </PFlexItem>
                <PFlexItem>
                    <br/>
                    <hr/>
                    <br/>
                </PFlexItem>
                <PFlexItem>
                    {/*To illustrate the mock procedure during the tests the selected value is displayed in the headline */}
                    <PHeadline variant={"headline-4"}>{this.getHeadline(this.state.selectValue)}</PHeadline>
                    <form>
                        <PSelectWrapper>
                            <select data-testid="select" value={this.state.selectValue}
                                    onChange={this.handleChangeSelect}>
                                <option value={"Headline A"}>Headline A</option>
                                <option value={"Headline B"}>Headline B</option>
                                <option value={"Headline C"}>Headline C</option>
                            </select>
                        </PSelectWrapper>
                    </form>
                </PFlexItem>
                <PFlexItem>
                    <br/>
                    <hr/>
                    <br/>
                </PFlexItem>
                <PFlexItem>
                    {/* Checking the Checkbox makes the headline appear */}
                    {this.state.checked ? <PHeadline variant={"headline-4"}>Checkbox Works</PHeadline> : ''}
                    <form onInput={e => this.check(e)}>
                        <PCheckboxWrapper label={"Some label"} hideLabel={false}>
                            <input data-testid="checkbox" type={"checkbox"} name={"TestBox"}></input>
                        </PCheckboxWrapper>
                    </form>
                    <br/>
                    {/* Clicking the Radiobutton makes the headline appear */}
                    {this.state.radioChecked ? <PHeadline variant={"headline-4"}>Radio Works</PHeadline> : ''}
                    <form onInput={e => this.radioCheck(e)}>
                        <PRadioButtonWrapper label={"Some label"} hideLabel={false}>
                            <input data-testid="radiobutton" type={"radio"} name={"RadioButton"}></input>
                        </PRadioButtonWrapper>
                    </form>
                </PFlexItem>
                <PFlexItem>
                    <br/>
                    <hr/>
                    <br/>
                </PFlexItem>
                <PFlexItem>
                    <form>
                        <PTextareaWrapper label={"Test TextArea"} hideLabel={false}>
                            <textarea name={"Testarea"}></textarea>
                        </PTextareaWrapper>
                    </form>
                    <br/>
                </PFlexItem>
                <PFlexItem>
                    {/* The headline changes according to the textfield input */}
                    <PHeadline variant={"headline-4"}>{this.getHeadline(this.state.textFieldValue)}</PHeadline>
                    <form>
                        <PTextFieldWrapper label={"Test TextField"} hideLabel={false}>
                            <input data-testid="input" type={"text"} name={"Textfield"}
                                   onChange={this.handleChangeTextField}></input>
                        </PTextFieldWrapper>
                    </form>
                    <br/>
                    <form>
                        <PFlexItem>
                            <PTextFieldWrapper>
                                {/* Example of slotted links */}
                                <span slot={"label"}>Some label with a <a data-testid="slottedHref"
                                                                          href={"https://designsystem.porsche.com"}>Slotted Link</a>.</span>
                                <input data-testid="slottedInput" type={"text"} aria-invalid={true}
                                       name={"some-name"} onChange={this.handleChangeTextField}></input>
                            </PTextFieldWrapper>
                        </PFlexItem>
                    </form>
                </PFlexItem>
            </PFlex>
        );
    }
}
