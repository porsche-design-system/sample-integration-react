import { PButton, PIcon, PLinkPure } from '@porsche-design-system/components-react';

export const PhnHeaderPage = (): JSX.Element => (
  <>
    <phn-header env="preview" locale="de-DE" style={{ position: 'absolute', left: 0, right: 0 }} />

    <div style={{ paddingTop: 150 }}>
      <div>
        <PButton>Some PButton</PButton>
      </div>
      <div>
        <PLinkPure href="#">Some PLinkPure</PLinkPure>
      </div>
      <div>
        <PIcon name="configurate" />
        <PIcon name="compare" />
        <PIcon name="search" />
      </div>
    </div>
  </>
);
