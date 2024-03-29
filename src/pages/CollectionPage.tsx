import { useCallback, useState } from 'react';
import type { AccordionUpdateEvent, PaginationUpdateEvent, TabsUpdateEvent } from '@porsche-design-system/components-react';
import {
  PAccordion,
  PButton,
  PButtonGroup,
  PButtonPure,
  PDivider,
  PGrid,
  PGridItem, PHeading,
  PIcon,
  PLink,
  PLinkPure,
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
  const [showHeading, setShowHeading] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAccordion1Open, setIsAccordion1Open] = useState<boolean>(false);
  const [isAccordion2Open, setIsAccordion2Open] = useState<boolean>(false);
  const [toastCounter, setToastCounter] = useState(1);

  const onButtonClick = useCallback(() => {
    setShowHeading(true);
    setIsDisabled((prev) => !prev);
  }, []);

  const onButtonPureClick = useCallback(() => {
    setShowHeading(false);
    setIsDisabled((prev) => !prev);
  }, []);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const onModalDismiss = useCallback(() => setIsModalOpen(false), []);
  const onPageUpdate = useCallback((ev: CustomEvent<PaginationUpdateEvent>) => setActivePage(ev.detail.page), []);
  const onTabUpdate = useCallback((ev: CustomEvent<TabsUpdateEvent>) => setActiveTab(ev.detail.activeTabIndex), []);
  const onAccordion1Update = useCallback((e: CustomEvent<AccordionUpdateEvent>) => {
    setIsAccordion1Open(e.detail.open);
  }, []);
  const onAccordion2Update = useCallback((e: CustomEvent<AccordionUpdateEvent>) => {
    setIsAccordion2Open(e.detail.open);
  }, []);

  const { addMessage } = useToastManager();

  const queueToast = () => {
    addMessage({ text: `Some message ${toastCounter}`, state: 'info' });
    setToastCounter((prev) => prev + 1);
  };

  const content =
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et ' +
    'dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.';

  return (
    <PGrid>
      <PGridItem size={12}>
        <PHeading size="medium">Buttons</PHeading>
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
      {showHeading && (
        <PGridItem size={12} className="contentWrapperSmall">
          {/* To illustrate working custom elements during the tests the buttons insert/dismiss a headline */}
          <PHeading size="medium">Heading appears through Button click</PHeading>
        </PGridItem>
      )}

      <PGridItem size={12} className="contentWrapperSmall">
        <PButton onClick={openModal}>Open Modal</PButton>
        <PModal heading="Some Heading" open={isModalOpen} onDismiss={onModalDismiss}>
          <PText>Some Content</PText>
          <PButtonGroup className="footer">
            <PButton>Save</PButton>
            <PButton variant="secondary" onClick={onModalDismiss}>
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
        <PHeading size="medium">Links</PHeading>
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

      <PGridItem size={12}>
        <PDivider className="divider" />
        <PHeading size="medium">Tabs</PHeading>
        <PDivider className="divider" />
        <PTabsBar activeTabIndex={activeTab} onUpdate={onTabUpdate}>
          <button>Tab 1</button>
          <button>Tab 2</button>
          <button>Tab 3</button>
        </PTabsBar>
      </PGridItem>

      <PGridItem size={12}>
        <PDivider className="divider" />
        <PHeading size="medium">Icons</PHeading>
        <PDivider className="divider" />
        <PSpinner size="small" />
      </PGridItem>
      <PGridItem size={12}>
        <PIcon size="medium" name="highway" role="img" />
      </PGridItem>

      <PGridItem size={12}>
        <PDivider className="divider" />
        <PHeading size="medium">Accordion</PHeading>
        <PDivider className="divider" />
      </PGridItem>
      <PGridItem size={12}>
        <div className="accordion-wrapper">
          <PAccordion heading="Some Heading" tag="h3" open={isAccordion1Open} onUpdate={onAccordion1Update}>
            <PText>{content}</PText>
            <PText>{content}</PText>
          </PAccordion>
          <PAccordion heading="Some Heading" tag="h3" open={isAccordion2Open} onUpdate={onAccordion2Update}>
            <PText>{content}</PText>
            <PText>{content}</PText>
          </PAccordion>
        </div>
      </PGridItem>

      <PGridItem size={12}>
        <PDivider className="divider" />
        <PHeading size="medium">Popover</PHeading>
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
        <PHeading size="medium">You are on Page {activePage}</PHeading>
        <PDivider className="divider" />
        <PPagination totalItemsCount={11} itemsPerPage={3} activePage={activePage} onUpdate={onPageUpdate} />
      </PGridItem>
    </PGrid>
  );
};
