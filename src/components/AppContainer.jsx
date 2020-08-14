import React from "react";

import { ErrorWrapper, NotifyWrapper, ThemeWrapper } from "./";

export default function App({ children, ThemeProps = {}, NotifyProps = {} }) {
  return (
    <ThemeWrapper {...ThemeProps}>
      <ErrorWrapper>
        <NotifyWrapper {...NotifyProps}>{children}</NotifyWrapper>
      </ErrorWrapper>
    </ThemeWrapper>
  );
}
