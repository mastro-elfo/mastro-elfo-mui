/**
 * [propTypes description]
 * @type {Object}
 */

import React from "react";
import PropTypes from "prop-types";

import { SwipeableDrawer } from "@material-ui/core";

export default function Drawer({ children, ...others }) {
  return <SwipeableDrawer {...others}>{children}</SwipeableDrawer>;
}

Drawer.propTypes = {
  children: PropTypes.node
};
