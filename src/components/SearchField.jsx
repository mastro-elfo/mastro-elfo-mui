import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import classNames from "classnames";
import { debounce, deburr } from "lodash";
import { useSnackbar } from "notistack";

import { fade, makeStyles } from "@material-ui/core/styles";
import { IconButton, InputAdornment, TextField } from "@material-ui/core";

import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  AppBarSearch: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    }
  },
  AppBarInput: {
    color: "inherit"
  }
}));

export default function SearchField({
  // Set style for AppBar
  appBar = false,
  // Debounce delay
  delay = 250,
  // Clear button callback
  onClear = () => {},
  // Search callback
  onSearch = Promise.reject(new Error("No search function provided")),
  // Search button props
  SearchButtonProps = {},
  // Clear button props
  ClearButtonProps = {},
  // Others are passed to TextField
  ...others
}) {
  // Query string
  const [query, setQuery] = useState("");
  // Searching status
  const [searching, setSearching] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  // Define a debounced function to handle keypress searches
  const debounced = debounce(handleSearch, delay);

  // Debounce search when query changes
  useEffect(() => {
    if (query) {
      // Search only if there's a query string
      debounced();
      return () => debounced.cancel();
    }
  }, [query]);

  const classes = useStyles();

  // Handle search from any event (click, enter, keypress)
  const handleSearch = () => {
    // Cancel if there's a debounce pending
    debounced.cancel();
    // Set searching true
    setSearching(true);
    // Callback
    onSearch(query, deburr(query))
      .catch(err => {
        console.error(err);
        enqueueSnackbar(err.message, { variant: "error" });
      })
      // In any case reset searching
      .then(() => setSearching(false));
  };

  // Handle clear click events
  const handleClear = () => {
    // Cancel if there's a debounce pending
    debounced.cancel();
    // Reset query
    setQuery("");
    // Callback
    onClear();
  };

  // Hanle keypress events
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      // Fire immediate search if "Enter" is pressed
      handleSearch();
    }
  };

  // Handle change events
  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };

  return (
    <TextField
      type="text"
      variant={appBar ? "standard" : "outlined"}
      className={classNames({ [classes.AppBarSearch]: appBar })}
      placeholder="Search..."
      value={query}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton title="Search" onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            {!!query && (
              <IconButton title="Clear" onClick={handleClear} color="inherit">
                <ClearIcon />
              </IconButton>
            )}
          </InputAdornment>
        ),
        classes: {
          root: classNames({ [classes.AppBarInput]: appBar })
        },
        ...(appBar && { disableUnderline: true })
      }}
      {...others}
    />
  );
}

SearchField.propTypes = {
  appBar: PropTypes.bool,
  delay: PropTypes.number,
  onClear: PropTypes.func,
  onSearch: PropTypes.func,
  SearchButtonProps: PropTypes.object,
  ClearButtonProps: PropTypes.object
};
