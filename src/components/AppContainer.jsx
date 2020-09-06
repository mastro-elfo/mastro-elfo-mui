import React from "react";

import { ErrorWrapper, NotifyWrapper, RouterWrapper, ThemeWrapper } from "./";

export default function App({
  children,
  ThemeProps = {},
  NotifyProps = {},
  RouterProps = {}
}) {
  return (
    <ThemeWrapper {...ThemeProps}>
      <ErrorWrapper>
        <NotifyWrapper {...NotifyProps}>
          <RouterWrapper>{children}</RouterWrapper>
        </NotifyWrapper>
      </ErrorWrapper>
    </ThemeWrapper>
  );
}
