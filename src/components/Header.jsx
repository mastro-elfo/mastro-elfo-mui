import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";

import GrowTypography from "./GrowTypography";

/**
 * Create an AppBar/Toolbar header.
 *
 * Children are rendered inside a flexGrow Typography
 * @param node    children
 * // TODO: Remove in v3.0.0
 * @param node    LeftAction=null
 * @param node    leftAction=null
 * // TODO: Remove in v3.0.0
 * @param array   RightActions=[]
 * @param node    rightAction=null
 * @param bool    shrink=false       if `true` "shrinks" the `Typography` component
 * @param object  TitleProps={}
 * @param object  ToolbarProps={}
 * @param bool    withContainer      if `true` wraps inner `Toolbar` inside `Container`
 * @param any     rest               The rest of the props are passed to `AppBar`
 * @constructor
 */
export default function Header({
  children,
  // TODO: Remove in v3.0.0
  LeftAction = null,
  leftAction = null,
  // TODO: Remove in v3.0.0
  RightActions = [],
  rightAction = null,
  shrink = false,
  TitleProps = {},
  ToolbarProps = {},
  withContainer = false,
  ...rest
}) {
  if (LeftAction !== null) {
    // TODO: Remove in v3.0.0
    console.warn(
      "Property `LeftAction` is deprecated since v2.19.2 and will be removed in v3.0.0. Use `leftAction` instead"
    );
  }
  if (
    RightActions !== null &&
    typeof RightActions === "object" &&
    (!RightActions.map || RightActions.length !== 0)
  ) {
    // TODO: Remove in v3.0.0
    console.warn(
      "Property `RightActions` is deprecated since v2.19.2 and will be removed in v3.0.0. Use `rightAction` instead"
    );
  }

  const TypographyComponent = shrink ? Typography : GrowTypography;

  const appBarContent = (
    <Toolbar disableGutters={withContainer} {...ToolbarProps}>
      {LeftAction}
      {leftAction}
      <TypographyComponent variant="h6" {...TitleProps}>
        {children}
      </TypographyComponent>
      {RightActions}
      {rightAction}
    </Toolbar>
  );

  return (
    <Fragment>
      <AppBar {...rest}>
        {!!withContainer ? (
          <Container>{appBarContent}</Container>
        ) : (
          appBarContent
        )}
      </AppBar>
      <Toolbar />
    </Fragment>
  );
}

Header.propTypes = {
  children: PropTypes.node,
  // TODO: Remove in v3.0.0
  LeftAction: PropTypes.node,
  leftAction: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  // TODO: Remove in v3.0.0
  RightActions: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  rightAction: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  shrink: PropTypes.bool,
  TitleProps: PropTypes.object,
  ToolbarProps: PropTypes.object,
  withContainer: PropTypes.bool,
};
