import React from 'react';
import {
    PButton,
    PCheckboxWrapper,
    PGrid,
    PGridItem,
    PHeadline,
    PSelectWrapper,
    PTextareaWrapper,
    PFlex,
    PFlexItem,
    PTextFieldWrapper,
    PRadioButtonWrapper,
    PButtonPure,
    PLink,
    PLinkPure,
    PSpinner,
    PIcon,
    PPagination
} from '@porsche-design-system/components-react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
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

    submit(event) {
        event.nativeEvent.preventDefault();
        this.setState({
            submitted: true
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

    dismiss(event) {
        event.nativeEvent.preventDefault();
        this.setState({submitted: false});
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
            <div className="App">
                <PGrid>
                    <PGridItem size={12}>
                        <PHeadline variant={"headline-2"}>Example Projekt to display useage of Porsche Design
                            System</PHeadline>
                        <br/>
                        <hr/>
                        <br/>
                    </PGridItem>

                    <PGridItem>
                    {/*To illustrate the mock procedure during the tests the buttons insert/dismiss a headline*/}
                    {this.state.submitted ? <PHeadline variant={"headline-4"}>Hello</PHeadline> : ''}
                        <form onSubmit={e => this.submit(e)}>
                            <PButton type={"submit"}>Submit</PButton>
                        </form>
                        <br/>
                        <form onSubmit={e => this.dismiss(e)}>
                            <PButtonPure type={"submit"}>Dismiss</PButtonPure>
                        </form>
                    </PGridItem>
                </PGrid>
                <PFlex direction={"column"}>
                    <PFlexItem>
                        <br/>
                        <hr/>
                        <br/>
                        <PHeadline variant={"headline-3"}>Form examples</PHeadline>
                        <br/>
                        <hr/>
                        <br/>
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
                        {this.state.checked ? <PHeadline variant={"headline-4"}>Checkbox Works</PHeadline> : ''}
                        <form onInput={e => this.check(e)}>
                            <PCheckboxWrapper label={"Some label"} hideLabel={false}>
                                <input data-testid="checkbox" type={"checkbox"} name={"TestBox"}></input>
                            </PCheckboxWrapper>
                        </form>
                        <br/>
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
                        <form>
                            <PTextareaWrapper label={"Test TextArea"} hideLabel={false}>
                                <textarea name={"Testarea"}></textarea>
                            </PTextareaWrapper>
                        </form>
                        <br/>
                    </PFlexItem>
                    <PFlexItem>
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
                                    <span slot={"label"}>Some label with a <a data-testid="slottedHref"
                                                                              href={"https://designsystem.porsche.com"}>Slotted Link</a>.</span>
                                    <input data-testid="slottedInput" type={"text"} aria-invalid={true}
                                           name={"some-name"} onChange={this.handleChangeTextField}></input>
                                </PTextFieldWrapper>
                            </PFlexItem>
                        </form>
                    </PFlexItem>
                    <PFlexItem>
                        <br/>
                        <hr/>
                        <br/>
                        <PHeadline variant={"headline-4"}>Links</PHeadline>
                        <br/>
                    </PFlexItem>
                    <PFlexItem>
                        <a href="https://www.porsche.com">
                            <PLink>porsche.com</PLink>
                        </a>
                    </PFlexItem>
                    <br/>
                    <PFlexItem>
                        <a href="#hashTest">
                            <PLinkPure>Test PLinkPure</PLinkPure>
                        </a>
                        <PLinkPure href="#propHashTest">Test propHash</PLinkPure>
                    </PFlexItem>
                    <PFlexItem>
                        <br/>
                        <hr/>
                        <br/>
                        <PSpinner size={"small"} ariaLabel={"Loading"}></PSpinner>
                    </PFlexItem>
                    <PFlexItem>
                        <PIcon size={"medium"} name={"highway"} ariaLabel={"Highway icon"} role={"img"}></PIcon>
                        <br/>
                        <br/>
                        <hr/>
                    </PFlexItem>
                    <PHeadline variant={"headline-4"}>You are on Page {this.state.activePage} Page is changed {this.state.pageChangeCount} times</PHeadline>
                    <PPagination data-testid="pagination" totalItemsCount={11} itemsPerPage={3} activePage={this.state.activePage} onPageChange={e => this.pageChange(e)}></PPagination>
                </PFlex>
            </div>
        );
    }
}

export default App;
