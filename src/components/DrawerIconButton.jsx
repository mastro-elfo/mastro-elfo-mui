import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

import { IconButton } from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

import Drawer from "./Drawer";

/**
 * [DrawerIconButton description]
 * @param       {node} children             [description]
 * @param       {Object} [DrawerProps={}}]    [description]
 * @constructor
 */
export default function DrawerIconButton({
  children,
  DrawerProps = {},
  ...rest
}) {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <IconButton onClick={() => setOpen(true)} {...rest}>
        <MenuIcon />
      </IconButton>
      <Drawer
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        {...DrawerProps}
      >
        {children}
      </Drawer>
    </Fragment>
  );
}

DrawerIconButton.propTypes = {
  children: PropTypes.node,
  DrawerProps: PropTypes.object,
};
