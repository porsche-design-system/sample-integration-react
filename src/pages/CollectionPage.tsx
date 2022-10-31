import { useCallback, useState } from 'react';
import type { AccordionChangeEvent, PageChangeEvent, TabChangeEvent } from '@porsche-design-system/components-react';
import {
  PAccordion,
  PButton,
  PButtonGroup,
  PButtonPure,
  PDivider,
  PGrid,
  PGridItem,
  PHeadline,
  PIcon,
  PLink,
  PLinkPure, PLinkTile,
  PModal,
  PPagination,
  PPopover,
  PSpinner,
  PTabsBar,
  PText,
  useToastManager,
} from '@porsche-design-system/components-react';
import './CollectionPage.scss';

export const CollectionPage = (): JSX.Element => {
  const [showHeadline, setShowHeadline] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAccordion1Open, setIsAccordion1Open] = useState<boolean>(false);
  const [isAccordion2Open, setIsAccordion2Open] = useState<boolean>(false);
  const [toastCounter, setToastCounter] = useState(1);

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
  const onAccordion1Change = useCallback((e: CustomEvent<AccordionChangeEvent>) => {
    setIsAccordion1Open(e.detail.open);
  }, []);
  const onAccordion2Change = useCallback((e: CustomEvent<AccordionChangeEvent>) => {
    setIsAccordion2Open(e.detail.open);
  }, []);

  const { addMessage } = useToastManager();

  const queueToast = () => {
    addMessage({ text: `Some message ${toastCounter}`, state: 'neutral' });
    setToastCounter((prev) => prev + 1);
  };

  const content =
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et ' +
    'dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.';

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

      <PGridItem size={12} className="contentWrapperSmall">
        <PButton onClick={queueToast}>Queue Toast</PButton>
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
        <PLinkPure stretch={true}>
          <a href="#hashTest" className="removeLinkStyle">
            Test PLinkPure
          </a>
        </PLinkPure>
        <PLinkPure href="#propHashTest">Test propHash</PLinkPure>
      </PGridItem>
      <PGridItem size={5}>
        <PLinkTile href="#" label="Some Label" description="Default">
          <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAQMAAAAk8RryAAAABlBMVEUAAAD2vP9xXLiUAAAAAXRSTlMAQObYZgAAABxJREFUGNNjYOBgYGBhYKAZ/R8MDsD4Q5amkz8ASp4PtTYYQZIAAAAASUVORK5CYII=" alt="Some alt text"
          />
        </PLinkTile>
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
        <PHeadline variant="headline-4">Accordion</PHeadline>
        <PDivider className="divider" />
      </PGridItem>
      <PGridItem size={12}>
        <div className="accordion-wrapper">
          <PAccordion heading="Some Heading" tag="h3" open={isAccordion1Open} onAccordionChange={onAccordion1Change}>
            <PText>{content}</PText>
            <PText>{content}</PText>
          </PAccordion>
          <PAccordion heading="Some Heading" tag="h3" open={isAccordion2Open} onAccordionChange={onAccordion2Change}>
            <PText>{content}</PText>
            <PText>{content}</PText>
          </PAccordion>
        </div>
      </PGridItem>

      <PGridItem size={12}>
        <PDivider className="divider" />
        <PHeadline variant="headline-4">Popover</PHeadline>
        <PDivider className="divider" />
      </PGridItem>
      <PGridItem size={12}>
        <PText>
          Lorem ipsum dolor sit amet, <PPopover>Some descriptive content</PPopover> consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          <PPopover description="Short info opened top" direction="top"></PPopover>
          sed diam voluptua.
        </PText>
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
