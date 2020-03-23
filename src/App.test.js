import React, {createRef, useEffect} from 'react';
import {render, fireEvent} from '@testing-library/react';
import App from './App';

jest.mock('@porsche-design-system/components-react', () => ({
    PHeadline: props => <mock-PHeadline>{props.children}</mock-PHeadline>,
    PIcon: () => <mock-PIcon></mock-PIcon>,
    PButton: props => <button>{props.children}</button>,
    PButtonPure: props => <button>{props.children}</button>,
    PGrid: props => <mock-PGrid>{props.children}</mock-PGrid>,
    PGridItem: props => <mock-PGridItem>{props.children}</mock-PGridItem>,
    PFlex: props => <mock-PFlex>{props.children}</mock-PFlex>,
    PFlexItem: props => <mock-PFlexItem>{props.children}</mock-PFlexItem>,
    PSelectWrapper: props => <mock-PSelectWrapper>{props.children}</mock-PSelectWrapper>,
    PCheckboxWrapper: props => <mock-PCheckboxWrapper>{props.children}</mock-PCheckboxWrapper>,
    PRadioButtonWrapper: props => <mock-PRadioButtonWraper>{props.children}</mock-PRadioButtonWraper>,
    PTextareaWrapper: () => <mock-PTextareaWrapper></mock-PTextareaWrapper>,
    PTextFieldWrapper: props => <mock-PTextFieldWrapper>{props.children}</mock-PTextFieldWrapper>,
    PLink: props =>{ if (props.href){
        return <a href={props.href}>{props.children}</a>
    } return <mock-PLink>{props.children}</mock-PLink>},
    PLinkPure: props =>{ if (props.href){
        return <a href={props.href}>{props.children}</a>
    } return <mock-PLinkPure>{props.children}</mock-PLinkPure>},
    PSpinner: () => <mock-PSpinner></mock-PSpinner>,
    PPagination:  (props) => {
        const [state, setState] = useState({
            last: 1,
            current: 1,
            changed: false,
            listenerAttached: false
        });
        const host = createRef();

        if (state.current !== props.activePage) {
            setState({
                ...state,
                last: state.current,
                current: props.activePage,
                changed: true
            });
        }

        useEffect(() => {
            if (!state.listenerAttached) {
                host.current.addEventListener('pageChange', event => {
                    if (props.onPageChange) {
                        props.onPageChange(event);
                    }
                });

                setState({
                    ...state,
                    listenerAttached: true
                });
            }

            if (state.changed) {
                setState({
                    ...state,
                    changed: false
                });

                const pageChangeEvent = new CustomEvent('pageChange', {
                    detail: {
                        page: state.current,
                        previousPage: state.last
                    },
                    bubbles: true
                });

                host.current.dispatchEvent(pageChangeEvent);
            }
        });

        return (
            <mock-PPagination ref={host}>{ state.current }</mock-PPagination>
        );
    }
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

// jsdom has some limitations. One of them is the fact that we cant change location.
test('slotted Link should navigate to PDS while mocked', async () => {
    const {getByText} = render(<App/>);
    expect(getByText('Slotted Link').closest('a')).toHaveAttribute('href', 'https://designsystem.porsche.com')
});

test('a wrapped Link should navigate to #hashTest', async () => {
    const {getByText} = render(<App/>);
    const link = getByText(/Test PLinkPure/i);
    expect(link.closest('a')).toHaveAttribute('href', '#hashTest')
});

test('a wrapped Link should navigate to #hashTest', async () => {
    const {getByText} = render(<App/>);
    const link = getByText(/Test propHash/i);
    expect(link.closest('a')).toHaveAttribute('href', '#propHashTest')
});

test('should return different active page', async () => {
    const {getByTestId} = render(<App/>);

    fireEvent.getByTestId('pagination').


});
