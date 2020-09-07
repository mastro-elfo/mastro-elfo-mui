/**
 * Complex `Paper` that contains a login form.
 */

import React, { useState } from "react";

import { Box, Button, Paper, TextField, Typography } from "@material-ui/core";
import { AbsoluteCircularProgress, PasswordField } from "./";

export default function({
  // Props for all boxes
  BoxProps = {},
  // Both username and password props
  FieldProps = {},
  UsernameProps = {},
  PasswordProps = {},
  // Button props
  ButtonPops = {},
  // accepts (username, password), returns a Promise
  onLogin = () => Promise.reject(new Error("No callback provided")),
  //
  title = "",
  subtitle = "",
  // Others are passed to Paper
  ...others
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setErrorMessage("");
    onLogin(username, password)
      .catch(err => {
        console.error(err);
        setErrorMessage(err.message);
      })
      .then(() => {
        setLoading(false);
      });
  };

  return (
    <Paper {...others}>
      {!!title && (
        <Box {...BoxProps}>
          <Typography variant="h6">{title}</Typography>
        </Box>
      )}
      {!!subtitle && (
        <Box {...BoxProps}>
          <Typography variant="subtitle1">{subtitle}</Typography>
        </Box>
      )}

      <Box {...BoxProps}>
        <TextField
          fullWidth
          label="Username"
          onChange={({ target: { value } }) => setUsername(value)}
          {...FieldProps}
          {...UsernameProps}
        />
      </Box>
      <Box {...BoxProps}>
        <PasswordField
          fullWidth
          label="Password"
          onChange={({ target: { value } }) => setPassword(value)}
          {...FieldProps}
          {...PasswordProps}
        />
      </Box>

      {!!errorMessage && (
        <Box {...BoxProps}>
          <Typography color="error">{errorMessage}</Typography>
        </Box>
      )}

      <Box {...BoxProps}>
        <Button
          onClick={handleLogin}
          disabled={loading || !username || !password}
          {...ButtonPops}
        >
          Login
          {loading && <AbsoluteCircularProgress />}
        </Button>
      </Box>
    </Paper>
  );
}
