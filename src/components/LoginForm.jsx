import React, { useState } from "react";
import PropTypes from "prop-types";

import { Button, List, ListItem, TextField } from "@material-ui/core";
import AbsoluteCircularProgress from "./AbsoluteCircularProgress";
import Loading from "./Loading";
import PasswordField from "./PasswordField";
import useMounted from "../utils/useMounted";
import delay from "../utils/delay";

export default function LoginForm({
  // Custom actions after login button
  actions = null,
  // Login function or promise
  login = () => Promise.reject(new Error("No login function provided")),
  // Start value for username
  defaultPassword = "",
  // Start value for password
  defaultUsername = "",
  // Login button label
  // TODO: Remove in v3.0.0
  LoginLabel = "Login",
  loginLabel = "Login",
  // Login button props
  LoginProps = {},
  // Password Field props
  PasswordProps = {},
  // Username Field props
  UsernameProps = {},
}) {
  const mounted = useMounted();
  const [username, setUsername] = useState(defaultUsername);
  const [password, setPassword] = useState(defaultPassword);
  const [loading, setLoading] = useState(false);

  // Try to login
  const handleLogin = () => {
    setLoading(true);
    // Promise.resolve(login(username, password)).finally(() => {
    //   if (mounted) setLoading(false);
    // });
    delay(0, login, username, password).finally(() => {
      if (mounted) setLoading(false);
    });
  };
  // If hit Enter, try to login
  const handleKeyPress = ({ code }) => code === "Enter" && handleLogin();

  return (
    <List>
      <ListItem>
        {/* Username field */}
        <TextField
          fullWidth
          label="Username"
          value={username}
          onChange={({ target: { value } }) => setUsername(value)}
          onKeyPress={handleKeyPress}
          {...UsernameProps}
        />
      </ListItem>
      <ListItem>
        {/* Password Field */}
        <PasswordField
          fullWidth
          label="Password"
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
          onKeyPress={handleKeyPress}
          {...PasswordProps}
        />
      </ListItem>
      <ListItem>
        {/* Login Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          disabled={loading}
          {...LoginProps}
        >
          {
            // TODO: Change in v3.0.0 {loginLabel}
          }
          {LoginLabel !== "Login" ? LoginLabel : loginLabel}
          <Loading show={loading}>
            <AbsoluteCircularProgress />
          </Loading>
        </Button>
        {/* Other buttons */}
        {actions}
      </ListItem>
    </List>
  );
}

LoginForm.propTypes = {
  actions: PropTypes.node,
  login: PropTypes.func,
  defaultPassword: PropTypes.string,
  defaultUsername: PropTypes.string,
  // TODO: Remove in v3.0.0
  LoginLabel: PropTypes.string,
  loginLabel: PropTypes.string,
  LoginProps: PropTypes.object,
  PasswordProps: PropTypes.object,
  UsernameProps: PropTypes.object,
};
