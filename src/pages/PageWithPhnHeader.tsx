import React from "react";
import {
  PButton,
  PIcon,
  PLinkPure,
} from "@porsche-design-system/components-react";

export const PageWithPhnHeader = () => (
  <>
    <phn-header />

    <div style={{ paddingTop: 20 }}>
      <div>
        <PButton>Some PButton</PButton>
      </div>
      <div>
        <PLinkPure>Some PLinkPure</PLinkPure>
      </div>
      <div>
        <PIcon name="configurate" />
        <PIcon name="compare" />
        <PIcon name="search" />
      </div>
    </div>
  </>
);
