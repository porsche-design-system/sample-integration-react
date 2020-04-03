import React, { useState } from 'react';
import {
    PButton,
    PButtonPure,
    PDivider,
    PGrid,
    PGridItem,
    PHeadline,
    PIcon,
    PLink,
    PLinkPure,
    PPagination,
    PSpinner
} from "@porsche-design-system/components-react";

export function ComponentsCollection() {

    const [submit, setSubmit] = useState(false);
    const [activePage, setActivePage] = useState(1);


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setSubmit(true);
    };

    const handleDismiss = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setSubmit(false);
    };

    const handleActivePage = (event: CustomEvent): void => {
        setActivePage(event.detail.page)
    };

    return (
        <PGrid>
            <PGridItem size="12">
                <PHeadline variant={"headline-4"}>Buttons</PHeadline>
            </PGridItem>
            <PGridItem size="12">
                <PDivider className={'divider'}/>
            </PGridItem>
            <PGridItem size="12">
                {/*To illustrate the mock procedure during the tests the buttons insert/dismiss a headline*/}
                {submit ? <PHeadline variant={"headline-4"}>Hello</PHeadline> : ''}
                <form onSubmit={e => handleSubmit(e)}>
                    <PButton type={"submit"}>Submit</PButton>
                </form>
            </PGridItem>
            <PGridItem className={'contentWrapperSmall'}>
                <form onSubmit={e => handleDismiss(e)}>
                    <PButtonPure type={"submit"}>Dismiss</PButtonPure>
                </form>
            </PGridItem>
            <PGridItem size="12">
                <PDivider className={'divider'}/>
            </PGridItem>
            <PGridItem size="12">
                <PHeadline variant={"headline-4"}>Links</PHeadline>
            </PGridItem>
            <PGridItem size="12">
                <PDivider className={'divider'}/>
            </PGridItem>
            <PGridItem size="12">
                <a href="https://www.porsche.com" className={'removeLinkStyle'}>
                    <PLink>porsche.com</PLink>
                </a>
            </PGridItem>
            <PGridItem size="12" className={'contentWrapperBig'}>
                <a href="#hashTest" className={'removeLinkStyle'}>
                    <PLinkPure>Test PLinkPure</PLinkPure>
                </a>
                <PLinkPure href="#propHashTest">Test propHash</PLinkPure>
            </PGridItem>
            <PGridItem size="12">
                <PDivider className={'divider'}/>
            </PGridItem>
            <PGridItem size="12">
                <PHeadline variant={"headline-4"}>Icons</PHeadline>
            </PGridItem>
            <PGridItem size="12">
                <PDivider className={'divider'}/>
            </PGridItem>
            <PGridItem size="12">
                <PSpinner size={"small"}></PSpinner>
            </PGridItem>
            <PGridItem size="12">
                <PIcon size={"medium"} name={"highway"} role={"img"}></PIcon>
            </PGridItem>
            <PGridItem size="12">
                <PDivider className={'divider'}/>
            </PGridItem>
            <PGridItem size="12">
                {/* Simple usage of PPagination. By linking state to activePage, we can listen to the pageChange event of
                the component*/}
                <PHeadline variant={"headline-4"}>You are on Page {activePage} Page </PHeadline>
            </PGridItem>
            <PGridItem size="12">
                <PPagination data-testid="pagination" totalItemsCount={11} itemsPerPage={3}
                             activePage={activePage} onPageChange={e => handleActivePage(e)}
                ></PPagination>
            </PGridItem>
        </PGrid>
    );
}
