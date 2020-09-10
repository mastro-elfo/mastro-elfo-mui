import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSnackbar } from "notistack";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from "@material-ui/core";

import { Loading, PasswordField } from "./";

export default function LoginDialog({
  title = "",
  BoxProps = {},
  UsernameProps = {},
  PasswordProps = {},
  ButtonProps = {},
  ButtonLabel = "Login",
  login = () => Promise.reject(new Error("No login function provided")),
  ...others
}) {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const handleLogin = () => {
    setLoading(true);
    login(username, password)
      .catch(err => {
        console.error(err);
        enqueueSnackbar(err.message, { variant: "error" });
      })
      .then(() => {
        setLoading(false);
      });
  };

  return (
    <Dialog {...others}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Box {...BoxProps}>
          <TextField
            fullWidth
            label="Username"
            onChange={({ target: { value } }) => setUsername(value)}
            {...UsernameProps}
          />
        </Box>
        <Box {...BoxProps}>
          <PasswordField
            fullWidth
            label="Password"
            onChange={({ target: { value } }) => setPassword(value)}
            {...PasswordProps}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button disabled={loading} onClick={handleLogin} {...ButtonProps}>
          {ButtonLabel}
          <Loading loading={loading} />
        </Button>
      </DialogActions>
    </Dialog>
  );
}

LoginDialog.propTypes = {
  title: PropTypes.string,
  BoxProps: PropTypes.object,
  UsernameProps: PropTypes.object,
  PasswordProps: PropTypes.object,
  ButtonProps: PropTypes.object,
  login: PropTypes.func
};
