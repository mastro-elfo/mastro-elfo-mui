/**
 * Create an AppBar/Toolbar header.
 *
 * Children are rendered inside a flexGrow Typography
 */

import React, { Fragment } from "react";

import { AppBar, Toolbar } from "@material-ui/core";

import GrowTypography from "./GrowTypography";

/**
 * Create an AppBar/Toolbar header.
 *
 * Children are rendered inside a flexGrow Typography
 * @param   {node}    children          [description]
 * @param   {node}    [LeftAction=null] [description]
 * @param   {Array}   [RightActions=[]] [description]
 * @param   {Object}  [TitleProps={}}]  [description]
 * @param   {any}     [rest]            [description]
 * @constructor
 */
export default function Header({
  children,
  LeftAction = null,
  RightActions = [],
  TitleProps = {},
  ...rest
}) {
  return (
    <Fragment>
      <AppBar {...rest}>
        <Toolbar>
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
