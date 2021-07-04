import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

import { Button, IconButton } from "@material-ui/core";

import ConfirmDialog from "./ConfirmDialog";

/**
 * Creates a `Button`  or an `IconButton` that opens a `ConfirmDialog`.
 * @param {node}  children
 * @param {Boolean} isIcon=false
 * @param {function}  onConfirm=()=>{}
 * @param {function} onOpen=()=>{}
 * @param {node} Component=Button
 * @param {object} DialogProps={}
 */
export default function ConfirmDialogButton({
  children,
  isIcon = false,
  onConfirm = () => {},
  onOpen = () => {},
  Component = Button,
  DialogProps = {},
  ...others
}) {
  const [open, setOpen] = useState(false);

  // Use Button or IconButton
  // const Component = isIcon ? IconButton : Button;
  if (isIcon) {
    Component = IconButton;
  }

  const handleConfirm = () => {
    setOpen(false);
    onConfirm();
  };

  const handleOpen = () => {
    setOpen(true);
    onOpen();
  };

  return (
    <Fragment>
      <Component onClick={handleOpen} {...others}>
        {children}
      </Component>
      <ConfirmDialog
        open={open}
        onClose={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        onConfirm={handleConfirm}
        {...DialogProps}
      />
    </Fragment>
  );
}

ConfirmDialogButton.propTypes = {
  children: PropTypes.node.isRequired,
  isIcon: PropTypes.bool,
  onConfirm: PropTypes.func,
  onOpen: PropTypes.func,
  ButtonProps: PropTypes.object,
  DialogProps: PropTypes.object,
};
