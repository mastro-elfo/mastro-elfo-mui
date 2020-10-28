import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

import { IconButton } from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

import Drawer from "./Drawer";

/**
 * [DrawerIconButton description]
 * @param       {node} children             [description]
 * @param       {Object} [IconButtonProps={}] [description]
 * @param       {Object} [DrawerProps={}}]    [description]
 * @constructor
 */
export default function DrawerIconButton({
  children,
  IconButtonProps = {},
  DrawerProps = {},
  ...rest
}) {
  if (
    typeof IconButtonProps === "object" &&
    Object.keys(IconButtonProps).length > 0
  ) {
    console.warn(
      "IconButtonProps is deprecated since v1.23.0 and will be removed in v2.0.0. Use `<DrawerIconButton ...rest/>` instead."
    );
  }

  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <IconButton onClick={() => setOpen(true)} {...IconButtonProps} {...rest}>
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
  IconButtonProps: PropTypes.object,
  DrawerProps: PropTypes.object
};
