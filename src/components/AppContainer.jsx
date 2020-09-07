/**
 * Main container for an application.
 *
 * Wraps the application with Theme, Error handler, Notifier and Router.
 * Wrappers can be configured with ThemeProps, NotifyProps and RouterProps.
 */

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
          <RouterWrapper {...RouterProps}>{children}</RouterWrapper>
        </NotifyWrapper>
      </ErrorWrapper>
    </ThemeWrapper>
  );
}
