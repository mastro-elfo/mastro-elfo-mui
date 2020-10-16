import React from "react";
import PropTypes from "prop-types";

import { SwipeableDrawer } from "@material-ui/core";

/**
 * [Drawer description]
 * @param       {node} children [description]
 * @param       {any} others   [description]
 * @constructor
 */
export default function Drawer({ children, ...others }) {
  return <SwipeableDrawer {...others}>{children}</SwipeableDrawer>;
}

Drawer.propTypes = {
  children: PropTypes.node
};
