import React from 'react';
import {
    PButton,
    PButtonPure,
    PGridItem,
    PGrid,
    PHeadline, PIcon, PLink, PLinkPure, PPagination, PSpinner
} from "@porsche-design-system/components-react";


export class ComponentsCollection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
            activePage: 1,
            pageChangeCount: 0,
        };
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

    dismiss(event) {
        event.nativeEvent.preventDefault();
        this.setState({submitted: false});
    }

    render() {
        return (
            <PGrid>
                <PGridItem size="12">
                    <PHeadline variant={"headline-4"}>Buttons</PHeadline>
                </PGridItem>
                <PGridItem size="12">
                    <br/>
                    <hr/>
                    <br/>
                </PGridItem>
                <PGridItem size="12">
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
                <PGridItem size="12">
                    <br/>
                    <hr/>
                    <br/>
                </PGridItem>
                <PGridItem size="12">
                    <PHeadline variant={"headline-4"}>Links</PHeadline>
                </PGridItem>
                <PGridItem size="12">
                    <br/>
                    <hr/>
                    <br/>
                </PGridItem>
                <PGridItem size="12">
                    <a href="https://www.porsche.com">
                        <PLink>porsche.com</PLink>
                    </a>
                    <br/>
                    <br/>
                </PGridItem>
                <PGridItem size="12">
                    <a href="#hashTest" className={'removeLinkStyle'}>
                        <PLinkPure>Test PLinkPure</PLinkPure>
                    </a>
                    <PLinkPure href="#propHashTest">Test propHash</PLinkPure>
                </PGridItem>
                <PGridItem size="12">
                    <br/>
                    <hr/>
                    <br/>
                </PGridItem>
                <PGridItem size="12">
                    <PHeadline variant={"headline-4"}>Icons</PHeadline>
                </PGridItem>
                <PGridItem size="12">
                    <br/>
                    <hr/>
                    <br/>
                </PGridItem>
                <PGridItem size="12">
                    <PSpinner size={"small"} ariaLabel={"Loading"}></PSpinner>
                </PGridItem>
                <PGridItem size="12">
                    <PIcon size={"medium"} name={"highway"} ariaLabel={"Highway icon"} role={"img"}></PIcon>
                </PGridItem>
                <PGridItem size="12">
                    <br/>
                    <hr/>
                    <br/>
                </PGridItem>
                <PGridItem size="12">
                {/* Simple usage of PPagination. By linking state to activePage, we can listen to the pageChange event of the component */}
                <PHeadline variant={"headline-4"}>You are on Page {this.state.activePage} Page is
                    changed {this.state.pageChangeCount} times</PHeadline>
                </PGridItem>
                <PGridItem size="12">
                <PPagination data-testid="pagination" totalItemsCount={11} itemsPerPage={3}
                             activePage={this.state.activePage}
                             onPageChange={e => this.pageChange(e)}></PPagination>
                </PGridItem>
            </PGrid>
        );
    }
}
