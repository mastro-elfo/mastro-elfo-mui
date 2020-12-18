import React, { createRef } from "react";
import PropTypes from "prop-types";

import { SnackbarProvider } from "notistack";

import { IconButton } from "@material-ui/core/";

import CloseIcon from "@material-ui/icons/Close";

const notistackRef = createRef();

/**
 * Wrapper for `notistack` snackbars.
 *
 * @see: https://iamhosseindhv.com/notistack
 * @param  {node} children [description]
 * @param {object} DismissIconButtonProps
 * @param  {any} props    [description]
 * @constructor
 */
export default function NotifyWrapper({
  children,
  DismissIconButtonProps,
  ...props
}) {
  const handleDismiss = (key) => () => notistackRef.current.closeSnackbar(key);

  return (
    <SnackbarProvider
      ref={notistackRef}
      maxSnack={5}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      autoHideDuration={5000}
      action={(key) => (
        <IconButton
          color="inherit"
          title="Dismiss"
          onClick={handleDismiss(key)}
          {...DismissIconButtonProps}
        >
          {/*TODO: `color` and `title` properties are deprecated since v2.8.0 and will be removed in v3.0.0. Use DismissIconButtonProps instead.*/}
          <CloseIcon />
        </IconButton>
      )}
      {...props}
    >
      {children}
    </SnackbarProvider>
  );
}

NotifyWrapper.propTypes = {
  children: PropTypes.node,
  DismissIconButtonProps: PropTypes.object,
};
