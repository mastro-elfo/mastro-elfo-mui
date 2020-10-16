import React, { useState } from "react";
import PropTypes from "prop-types";

import { IconButton, InputAdornment, TextField } from "@material-ui/core";

import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

/**
 * A `TextField` with an `IconButton` that toggles visibility.
 * @param  {Object} [IconButtonProps={}] [description]
 * @param  {any} others               [description]
 * @constructor
 */
export default function PasswordField({ IconButtonProps = {}, ...others }) {
  // Visibility state
  const [hide, setHide] = useState(true);

  return (
    <TextField
      type={hide ? "password" : "text"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() => setHide(!hide)}
              tabIndex={-1}
              {...IconButtonProps}
            >
              {hide ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </InputAdornment>
        )
      }}
      {...others}
    />
  );
}

PasswordField.propTypes = {
  IconButtonProps: PropTypes.object
};
