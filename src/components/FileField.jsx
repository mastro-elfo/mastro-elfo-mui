import React, { Fragment, useRef, useState } from "react";
import PropTypes from "prop-types";

import { IconButton, InputAdornment, TextField } from "@material-ui/core";

import ClearIcon from "@material-ui/icons/Clear";

/**
 * `TextField` for files
 * @param {Object}    [FileProps={}]      Properties for the hidden input with type file
 * @param {function}  [onChange=(e)=>{}]  Fired on change
 * @param {function}  [onClear=(e)=>{}]   Fired when clear button is clicked
 * @param {any}       [props]             Passed to `TextField`
 * @constructor
 */
export default function FileField({
  FileProps = {},
  onChange = () => {},
  onClear = () => {},
  ...props
}) {
  const ref = useRef();
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.files[0].name);
    onChange(e);
  };
  const handleClear = (e) => {
    e.stopPropagation();
    setValue("");
    onClear(e);
  };

  return (
    <Fragment>
      <TextField
        {...props}
        type="text"
        value={value}
        onClick={() => ref.current.click()}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleClear} edge="end">
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <input
        {...FileProps}
        type="file"
        hidden
        ref={ref}
        onChange={handleChange}
      />
    </Fragment>
  );
}

FileField.propTypes = {
  FileProps: PropTypes.object,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
};
