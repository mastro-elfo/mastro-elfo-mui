import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { AppBar, Toolbar } from "@material-ui/core";

import GrowTypography from "./GrowTypography";

/**
 * Create an AppBar/Toolbar header.
 *
 * Children are rendered inside a flexGrow Typography
 * @param   {node}    children            [description]
 * // TODO: Remove in v3.0.0
 * @param   {node}    [LeftAction=null]   [description]
 * @param   {node}    [leftAction=null]
 * // TODO: Remove in v3.0.0
 * @param   {Array}   [RightActions=[]]   [description]
 * @param   {node}    [rightAction=null]
 * @param   {Object}  [TitleProps={}}]    [description]
 * @param   {Object}  [ToolbarProps={}}]  [description]
 * @param   {any}     [rest]              [description]
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
  TitleProps = {},
  ToolbarProps = {},
  ...rest
}) {
  if (LeftAction !== null) {
    // TODO: Remove in v3.0.0
    console.warn(
      "Property `LeftAction` is deprecated since 2.20.0 and will be removed in v3.0.0. Use `leftAction` instead"
    );
  }
  if (
    RightActions !== null &&
    typeof RightActions === "object" &&
    (!RightActions.map || RightActions.length !== 0)
  ) {
    // TODO: Remove in v3.0.0
    console.warn(
      "Property `RightActions` is deprecated since 2.20.0 and will be removed in v3.0.0. Use `rightAction` instead"
    );
  }
  return (
    <Fragment>
      <AppBar {...rest}>
        <Toolbar {...ToolbarProps}>
          {LeftAction}
          {leftAction}
          <GrowTypography variant="h6" {...TitleProps}>
            {children}
          </GrowTypography>
          {RightActions}
          {rightAction}
        </Toolbar>
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
  TitleProps: PropTypes.object,
  ToolbarProps: PropTypes.object,
};
