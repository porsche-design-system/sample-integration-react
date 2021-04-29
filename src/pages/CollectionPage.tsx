import { useCallback, useState } from 'react';
import type { PageChangeEvent, TabChangeEvent } from '@porsche-design-system/components-react';
import {
  PButton,
  PButtonGroup,
  PButtonPure,
  PDivider,
  PGrid,
  PGridItem,
  PHeadline,
  PIcon,
  PLink,
  PLinkPure,
  PModal,
  PPagination,
  PSpinner,
  PTabsBar,
  PText,
} from '@porsche-design-system/components-react';
import './CollectionPage.scss';

export const CollectionPage = (): JSX.Element => {
  const [showHeadline, setShowHeadline] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onButtonClick = useCallback(() => {
    setShowHeadline(true);
    setIsDisabled((prev) => !prev);
  }, []);

  const onButtonPureClick = useCallback(() => {
    setShowHeadline(false);
    setIsDisabled((prev) => !prev);
  }, []);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const onModalClose = useCallback(() => setIsModalOpen(false), []);
  const onPageChange = useCallback((ev: CustomEvent<PageChangeEvent>) => setActivePage(ev.detail.page), []);
  const onTabChange = useCallback((ev: CustomEvent<TabChangeEvent>) => setActiveTab(ev.detail.activeTabIndex), []);

  return (
    <PGrid>
      <PGridItem size={12}>
        <PHeadline variant="headline-4">Buttons</PHeadline>
        <PDivider className="divider" />
        <PButton disabled={isDisabled} onClick={onButtonClick}>
          Submit
        </PButton>
      </PGridItem>
      <PGridItem size={12} className="contentWrapperSmall">
        <PButtonPure disabled={!isDisabled} onClick={onButtonPureClick}>
          Dismiss
        </PButtonPure>
      </PGridItem>
      {showHeadline && (
        <PGridItem size={12} className="contentWrapperSmall">
          {/* To illustrate working custom elements during the tests the buttons insert/dismiss a headline */}
          <PHeadline variant="headline-4">Headline appears through Button click</PHeadline>
        </PGridItem>
      )}
      <PGridItem size={12} className="contentWrapperSmall">
        <PButton onClick={openModal}>Open Modal</PButton>
        <PModal heading="Some Heading" open={isModalOpen} onClose={onModalClose}>
          <PText>Some Content</PText>
          <PButtonGroup className="footer">
            <PButton>Save</PButton>
            <PButton variant="tertiary" onClick={onModalClose}>
              Close
            </PButton>
          </PButtonGroup>
        </PModal>
      </PGridItem>

      <PGridItem size={12}>
        <PDivider className="divider" />
        <PHeadline variant="headline-4">Links</PHeadline>
        <PDivider className="divider" />

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
        <PHeadline variant="headline-4">Tabs</PHeadline>
        <PDivider className="divider" />
        <PTabsBar activeTabIndex={activeTab} onTabChange={onTabChange}>
          <button>Tab 1</button>
          <button>Tab 2</button>
          <button>Tab 3</button>
        </PTabsBar>
      </PGridItem>

      <PGridItem size={12}>
        <PDivider className="divider" />
        <PHeadline variant="headline-4">Icons</PHeadline>
        <PDivider className="divider" />
        <PSpinner size="small" />
      </PGridItem>
      <PGridItem size={12}>
        <PIcon size="medium" name="highway" role="img" />
      </PGridItem>

      <PGridItem size={12}>
        <PDivider className="divider" />
        <PHeadline variant="headline-4">You are on Page {activePage} Page</PHeadline>
        <PDivider className="divider" />
        <PPagination totalItemsCount={11} itemsPerPage={3} activePage={activePage} onPageChange={onPageChange} />
      </PGridItem>
    </PGrid>
  );
};
