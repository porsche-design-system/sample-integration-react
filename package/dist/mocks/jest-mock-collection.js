import React from 'react';
/*To ensure Typescript is happy, we need to use IntrinsicElements. If you debug your tests, you are able to recognize the PDS-Component via data-testid */
export const PHeadlineMock = (props) => React.createElement("h1", { "data-testid": "PHeadline" }, props.children);
export const PIconMock = (props) => React.createElement("div", { "data-testid": "PIcon" }, props.children);
export const PButtonMock = (props) => React.createElement("button", { "data-testid": "PButton" }, props.children);
export const PButtonPureMock = (props) => React.createElement("button", null, props.children);
export const PDividerMock = (props) => React.createElement("div", { "data-testid": "PDivider" }, props.children);
export const PGridMock = (props) => React.createElement("div", { "data-testid": "PGrid" }, props.children);
export const PGridItemMock = (props) => React.createElement("div", { "data-testid": "PGridItem" }, props.children);
export const PFlexMock = (props) => React.createElement("div", { "data-testid": "PFlex" }, props.children);
export const PFlexItemMock = (props) => React.createElement("div", { "data-testid": "PFlexItem" }, props.children);
export const PSelectWrapperMock = (props) => React.createElement("div", { "data-testid": "PSelectWrapper" }, props.children);
export const PCheckboxWrapperMock = (props) => React.createElement("div", { "data-testid": "PCheckboxWrapper" }, props.children);
export const PRadioButtonWrapperMock = (props) => React.createElement("div", { "data-testid": "PRadioButtonWrapper" }, props.children);
export const PTextareaWrapperMock = (props) => React.createElement("div", { "data-testid": "PTextareaWrapper" }, props.children);
export const PTextFieldWrapperMock = (props) => React.createElement("div", { "data-testid": "PTextFieldWrapper" }, props.children);
/* To enable testing in wrapped Links we have to check if there is a href on our web-component before we simulate the native behaviour */
export const PLinkMock = (props) => {
    if (props.href) {
        return React.createElement("a", { href: props.href, "data-testid": "PLink" }, props.children);
    }
    return React.createElement("div", { "data-testid": "PLink" }, props.children);
};
export const PLinkPureMock = (props) => {
    if (props.href) {
        return React.createElement("a", { href: props.href, "data-testid": "PLinkPure" }, props.children);
    }
    return React.createElement("div", { "data-testid": "PLinkPure" }, props.children);
};
export const PSpinnerMock = (props) => React.createElement("div", { "data-testid": "PSpinner" }, props.children);
/* PPagination uses the onPageChange Event, which you could test. Unfortunately Jest and JS-Dom have many Restrictions (usage of useState is not allowed)
to trigger a Mocked Custom Event. */
export const PPaginationMock = (props) => React.createElement("div", { "data-testid": "PPagination" }, props.children);
//# sourceMappingURL=jest-mock-collection.js.map