import { useState } from 'react';
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
  PSpinner,
} from '@porsche-design-system/components-react';

export const CollectionPage = (): JSX.Element => {
  const [showHeadline, setShowHeadline] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSubmit = (): void => {
    setShowHeadline(true);
    setIsDisabled((prev) => !prev);
  };

  const handleDismiss = (): void => {
    setShowHeadline(false);
    setIsDisabled((prev) => !prev);
  };

  const handleActivePage = (event: CustomEvent): void => {
    setActivePage(event.detail.page);
  };

  return (
    <PGrid>
      <PGridItem size={12}>
        <PHeadline variant="headline-4">Buttons</PHeadline>
      </PGridItem>
      <PGridItem size={12}>
        <PDivider className="divider" />
      </PGridItem>
      <PGridItem size={12}>
        <PButton disabled={isDisabled} onClick={handleSubmit}>
          Submit
        </PButton>
      </PGridItem>
      <PGridItem size={12} className="contentWrapperSmall">
        <PButtonPure disabled={!isDisabled} onClick={handleDismiss}>
          Dismiss
        </PButtonPure>
      </PGridItem>
      {showHeadline && (
        <PGridItem size={12} className="contentWrapperSmall">
          {/*To illustrate working custom elements during the tests the buttons insert/dismiss a headline*/}
          <PHeadline variant="headline-4">Headline appears through Button click</PHeadline>
        </PGridItem>
      )}
      <PGridItem size={12}>
        <PDivider className="divider" />
      </PGridItem>
      <PGridItem size={12}>
        <PHeadline variant="headline-4">Links</PHeadline>
      </PGridItem>
      <PGridItem size={12}>
        <PDivider className="divider" />
      </PGridItem>
      {/*Example of all Link variation which are provided by the Porsche Design System*/}
      <PGridItem size={12}>
        <PLink>
          <a href="https://www.porsche.com" className="removeLinkStyle">
            porsche.com
          </a>
        </PLink>
      </PGridItem>
      <PGridItem size={12} className="contentWrapperBig">
        <PLinkPure>
          <a href="#hashTest" className="removeLinkStyle">
            Test PLinkPure
          </a>
        </PLinkPure>
        <PLinkPure href="#propHashTest">Test propHash</PLinkPure>
      </PGridItem>
      <PGridItem size={12}>
        <PDivider className="divider" />
      </PGridItem>
      <PGridItem size={12}>
        <PHeadline variant="headline-4">Icons</PHeadline>
      </PGridItem>
      <PGridItem size={12}>
        <PDivider className="divider" />
      </PGridItem>
      <PGridItem size={12}>
        <PSpinner size="small" />
      </PGridItem>
      <PGridItem size={12}>
        <PIcon size="medium" name="highway" role="img" />
      </PGridItem>
      <PGridItem size={12}>
        <PDivider className="divider" />
      </PGridItem>
      <PGridItem size={12}>
        {/* Simple usage of PPagination. By linking state to activePage, we can listen to the pageChange event of the component */}
        <PHeadline variant="headline-4">You are on Page {activePage} Page</PHeadline>
      </PGridItem>
      <PGridItem size={12}>
        <PPagination totalItemsCount={11} itemsPerPage={3} activePage={activePage} onPageChange={handleActivePage} />
      </PGridItem>
    </PGrid>
  );
};
