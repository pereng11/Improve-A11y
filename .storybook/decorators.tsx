import { Global } from "@emotion/react";
import * as React from "react";
import { globalStyles } from "../src/style";

export const globalDecorators = [
  (Story) => (
    <>
      <Global styles={globalStyles} />
      <Story />
    </>
  ),
];
