import React from "react";
import PropTypes from "prop-types";

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
 * @param       {Object} [NotifyProps={}]   Properties for `NotifyWrapper`
 * @param       {Object} [RouterProps={}]   [description]
 * @param       {Object} [SuspenseProps={}] [description]
 * @param       {Object} [ThemeProps={}]    [description]
 * @param       {Object} [WrapperProps={}}] [description]
 * @constructor
 */
export default function AppContainer({
  NotifyProps = {},
  RouterProps = {},
  SuspenseProps = {},
  ThemeProps = {},
  WrapperProps = { Children: [] }
}) {
  return (
    <Wrapper
      Children={[
        { Component: ThemeWrapper, ...ThemeProps },
        { Component: SuspenseWrapper, ...SuspenseProps },
        { Component: ErrorWrapper },
        { Component: NotifyWrapper, ...NotifyProps },
        ...WrapperProps.Children
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
  WrapperProps: PropTypes.object
};
