import React from "react";

import { ErrorWrapper, NotifyWrapper, ThemeWrapper } from "./";

export default function App({ children }) {
  return (
    <ThemeWrapper>
      <ErrorWrapper>
        <NotifyWrapper>{children}</NotifyWrapper>
      </ErrorWrapper>
    </ThemeWrapper>
  );
}
