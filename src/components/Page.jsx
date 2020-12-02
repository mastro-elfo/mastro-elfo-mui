/**
 * Create a single page with header, content and a "printable" version (hidden on screen).
 *
 * By default scrolling the page make a `TopFab` appear.
 */

import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

import MediaPrint from "./MediaPrint";
import MediaScreen from "./MediaScreen";
import TopFab from "./TopFab";

/**
 * Create a single page with header, content and a "printable" version (hidden on screen).
 *
 * By default scrolling the page make a `TopFab` appear.
 *
 * @param       {node} [content=null]   [description]
 * @param       {node} [footer=null]    [description]
 * @param       {node} [header=null]    [description]
 * @param       {node} [print=null]     [description]
 * @param       {Boolean} [topFab=true] [description]
 * @param       {Object}  [PaperProps={}] [description]
 * @param       {Object}  [TopFabProps={}]  [description]
 * @constructor
 */
export default function Page({
  content = null,
  footer = null,
  header = null,
  print = null,
  topFab = true,
  PaperProps = {},
  TopFabProps = {},
}) {
  const classes = useStyles();

  return (
    <Fragment>
      <MediaScreen>
        <Paper square elevation={0} className={classes.paper} {...PaperProps}>
          {topFab && <TopFab {...TopFabProps} />}
          {!!header && header}
          {!!content && content}
          {!!footer && footer}
          <div style={{ height: "1px" }} />
        </Paper>
      </MediaScreen>
      <MediaPrint>{!!print && print}</MediaPrint>
    </Fragment>
  );
}

Page.propTypes = {
  content: PropTypes.element,
  footer: PropTypes.element,
  header: PropTypes.element,
  print: PropTypes.element,
  topFab: PropTypes.bool,
  PaperProps: PropTypes.object,
  TopFabProps: PropTypes.object,
};

const useStyles = makeStyles({
  paper: { minHeight: "100%" },
});
