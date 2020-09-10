/**
 * Main container for an application.
 *
 * Wraps the application with Theme, Error handler, Notifier and Router.
 * Wrappers can be configured with ThemeProps, NotifyProps and RouterProps.
 */

import React from "react";
import PropTypes from "prop-types";

import { ErrorWrapper, NotifyWrapper, RouterWrapper, ThemeWrapper } from "./";

export default function App({
  NotifyProps = {},
  RouterProps = {},
  ThemeProps = {}
}) {
  return (
    <ThemeWrapper {...ThemeProps}>
      <ErrorWrapper>
        <NotifyWrapper {...NotifyProps}>
          <RouterWrapper {...RouterProps}></RouterWrapper>
        </NotifyWrapper>
      </ErrorWrapper>
    </ThemeWrapper>
  );
}

App.propTypes = {
  NotifyProps: PropTypes.object,
  RouterProps: PropTypes.object,
  ThemeProps: PropTypes.object
};
