/**
 * Create a single page with header, content and a "printable" version (hidden on screen).
 *
 * By default scrolling the page make a `TopFab` appear.
 */

import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { Paper } from "@material-ui/core";

import { NoPrint, Print } from "./Print";
import TopFab from "./TopFab";

/**
 * Create a single page with header, content and a "printable" version (hidden on screen).
 *
 * By default scrolling the page make a `TopFab` appear.
 *
 * @param       {[type]} [content=null] [description]
 * @param       {[type]} [header=null]  [description]
 * @param       {[type]} [print=null]   [description]
 * @param       {[type]} [topFab=true}] [description]
 * @constructor
 */
export default function Page({
  content = null,
  header = null,
  print = null,
  topFab = true,
  TopFabProps = {}
}) {
  return (
    <Fragment>
      <NoPrint>
        <Paper square elevation={0} style={{ minHeight: "100%" }}>
          {topFab && <TopFab {...TopFabProps} />}
          {!!header && header}
          {!!content && content}
        </Paper>
      </NoPrint>
      <Print>{!!print && print}</Print>
    </Fragment>
  );
}

Page.propTypes = {
  content: PropTypes.element,
  header: PropTypes.element,
  print: PropTypes.element,
  topFab: PropTypes.bool,
  TopFabProps: PropTypes.object
};
