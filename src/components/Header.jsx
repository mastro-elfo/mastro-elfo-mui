import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { AppBar, Toolbar } from "@material-ui/core";

import GrowTypography from "./GrowTypography";

/**
 * Create an AppBar/Toolbar header.
 *
 * Children are rendered inside a flexGrow Typography
 * @param   {node}    children            [description]
 * @param   {node}    [LeftAction=null]   [description]
 * @param   {Array}   [RightActions=[]]   [description]
 * @param   {Object}  [TitleProps={}}]    [description]
 * @param   {Object}  [ToolbarProps={}}]  [description]
 * @param   {any}     [rest]              [description]
 * @constructor
 */
export default function Header({
  children,
  LeftAction = null,
  RightActions = [],
  TitleProps = {},
  ToolbarProps = {},
  ...rest
}) {
  return (
    <Fragment>
      <AppBar {...rest}>
        <Toolbar {...ToolbarProps}>
          {LeftAction}
          <GrowTypography variant="h6" {...TitleProps}>
            {children}
          </GrowTypography>
          {RightActions}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Fragment>
  );
}

Header.propTypes = {
  children: PropTypes.node,
  LeftAction: PropTypes.node,
  RightActions: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  TitleProps: PropTypes.object,
  ToolbarProps: PropTypes.object
};
