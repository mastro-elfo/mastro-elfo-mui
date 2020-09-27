/**
 * Main container for an application.
 *
 * Wraps the application with Theme, Error handler, Notifier and Router.
 * Wrappers can be configured with ThemeProps, NotifyProps and RouterProps.
 */

import React from "react";
import PropTypes from "prop-types";

import {
  ErrorWrapper,
  NotifyWrapper,
  RouterWrapper,
  SuspenseWrapper,
  ThemeWrapper,
  Wrapper
} from "./";

export default function App({
  NotifyProps = {},
  RouterProps = {},
  SuspenseProps = {},
  ThemeProps = {},
  WrapperProps = {}
}) {
  return (
    <ThemeWrapper {...ThemeProps}>
      <SuspenseWrapper {...SuspenseProps}>
        <ErrorWrapper>
          <NotifyWrapper {...NotifyProps}>
            <Wrapper {...WrapperProps}>
              <RouterWrapper {...RouterProps} />
            </Wrapper>
          </NotifyWrapper>
        </ErrorWrapper>
      </SuspenseWrapper>
    </ThemeWrapper>
  );
}

App.propTypes = {
  NotifyProps: PropTypes.object,
  RouterProps: PropTypes.object,
  SuspenseProps: PropTypes.object,
  ThemeProps: PropTypes.object,
  WrapperProps: PropTypes.object
};
