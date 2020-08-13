import React from "react";

import { ErrorWrapper, NotifyWrapper, ThemeWrapper } from "./";

// TODO: Should take ThemeProps, ErrorProps, NotifyProps

export default function App({ children }) {
  return (
    <ThemeWrapper>
      <ErrorWrapper>
        <NotifyWrapper>{children}</NotifyWrapper>
      </ErrorWrapper>
    </ThemeWrapper>
  );
}
