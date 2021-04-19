import React from "react";
import PropTypes from "prop-types";

import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";

import Condition from "./Condition";

/**
 * Complex dialog box that asks to confirm some action.
 * @param       {String} [title=""]    [description]
 * @param       {String} [content=""]  [description]
 * @param       {String} [confirm=""]  [description]
 * @param       {String} [cancel=""]   [description]
 * @param       {Function} [onConfirm=()=>{}] [description]
 * @constructor
 */
export default function ConfirmDialog({
  // Other actions
  actions = null,
  // Content of cancel button
  cancel = "",
  // Content of confirm button
  confirm = "",
  // If array each element is the content of a different `DialogContentText`
  content = "",
  // Cancel callback
  onCancel = () => {},
  // Confirm callback
  onConfirm = () => {},
  // Content of `DialogTitle`
  title = "",
  // Buttons props
  CancelButtonProps = {},
  ConfirmButtonProps = {},
  // Other props are passed to `Dialog`
  ...other
}) {
  return (
    <Dialog {...other}>
      <Condition show={title}>
        <DialogTitle>{title}</DialogTitle>
      </Condition>

      <Condition show={content}>
        <DialogContent>
          {typeof content === "object" && content.map ? (
            content.map((item, i) => (
              <DialogContentText key={i}>{item}</DialogContentText>
            ))
          ) : (
            <DialogContentText>{content}</DialogContentText>
          )}
        </DialogContent>
      </Condition>

      <Condition show={!!confirm || !!cancel}>
        <DialogActions>
          <Condition show={confirm}>
            <Button
              color="primary"
              variant="contained"
              title="Confirm"
              onClick={onConfirm}
              {...ConfirmButtonProps}
            >
              {confirm}
            </Button>
          </Condition>

          <Condition show={cancel}>
            <Button
              color="secondary"
              title="Cancel"
              onClick={onCancel}
              {...CancelButtonProps}
            >
              {cancel}
            </Button>
          </Condition>

          {actions}
        </DialogActions>
      </Condition>
    </Dialog>
  );
}

ConfirmDialog.propTypes = {
  cancel: PropTypes.node,
  confirm: PropTypes.node,
  content: PropTypes.node,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  title: PropTypes.node,
  CancelButtonProps: PropTypes.object,
  ConfirmButtonProps: PropTypes.object,
};
