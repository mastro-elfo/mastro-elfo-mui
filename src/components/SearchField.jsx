import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { debounce, deburr } from "lodash";
import { useSnackbar } from "notistack";

import { IconButton, InputAdornment, TextField } from "@material-ui/core";

import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";

export default function SearchField({
  // Debounce delay
  delay = 250,
  // Clear button callback
  onClear = () => {},
  // Search callback
  onSearch = () => Promise.reject(new Error("No search function provided")),
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
      value={query}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton
              title="Search"
              onClick={handleSearch}
              {...SearchButtonProps}
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            {!!query && (
              <IconButton
                title="Clear"
                onClick={handleClear}
                color="inherit"
                {...ClearButtonProps}
              >
                <ClearIcon />
              </IconButton>
            )}
          </InputAdornment>
        )
      }}
      {...others}
    />
  );
}

SearchField.propTypes = {
  delay: PropTypes.number,
  onClear: PropTypes.func,
  onSearch: PropTypes.func,
  SearchButtonProps: PropTypes.object,
  ClearButtonProps: PropTypes.object
};
