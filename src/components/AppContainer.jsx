import React from "react";
import PropTypes from "prop-types";

import ConfigWrapper from "./ConfigWrapper";
import ErrorWrapper from "./ErrorWrapper";
import NotifyWrapper from "./NotifyWrapper";
import RouterWrapper from "./RouterWrapper";
import SuspenseWrapper from "./SuspenseWrapper";
import ThemeWrapper from "./ThemeWrapper";
import Wrapper from "./Wrapper";

/**
 * App main container.
 *
 * Wraps application with Theme, Error handler, Notifier and Router. Wrappers can be configured with ThemeProps, NotifyProps and RouterProps.
 *
 * @param       {Object} [ConfigProps={}]   Properties for `ConfigWrapper`
 * @param       {Object} [ErrorProps={}]    Properties for `ErrorWrapper`
 * @param       {Object} [NotifyProps={}]   Properties for `NotifyWrapper`
 * @param       {Object} [RouterProps={}]   Properties for `RouterWrapper`
 * @param       {Object} [SuspenseProps={}] Properties for `SuspenseWrapper`
 * @param       {Object} [ThemeProps={}]    Properties for `ThemeWrapper`
 * @param       {Object} [WrapperProps={}] Other wrappers
 * @constructor
 */
export default function AppContainer({
  ConfigProps = {},
  ErrorProps = {},
  NotifyProps = {},
  RouterProps = {},
  SuspenseProps = {},
  ThemeProps = {},
  // TODO: remove `Children` in v3.0.0
  WrapperProps = { Children: [], components: [] },
}) {
  return (
    <Wrapper
      components={[
        { Component: ConfigWrapper, ...ConfigProps },
        { Component: ThemeWrapper, ...ThemeProps },
        { Component: SuspenseWrapper, ...SuspenseProps },
        { Component: ErrorWrapper, ...ErrorProps },
        { Component: NotifyWrapper, ...NotifyProps },
        ...WrapperProps.Children,
        ...WrapperProps.components,
      ]}
    >
      <RouterWrapper {...RouterProps} />
    </Wrapper>
  );
}

AppContainer.propTypes = {
  NotifyProps: PropTypes.object,
  RouterProps: PropTypes.object,
  SuspenseProps: PropTypes.object,
  ThemeProps: PropTypes.object,
  WrapperProps: PropTypes.object,
};
