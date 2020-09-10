/**
 * Main container for an application.
 *
 * Wraps the application with Theme, Error handler, Notifier.
 * Wrappers can be configured with ThemeProps, NotifyProps.
 * Router, if used, must be passed as children, because other component can be added that need to wrap the router.
 */

import React from "react";
import PropTypes from "prop-types";

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

App.propTypes = {
  ErrorWrapper: PropTypes.object,
  NotifyWrapper: PropTypes.object,
  ThemeWrapper: PropTypes.object
};
