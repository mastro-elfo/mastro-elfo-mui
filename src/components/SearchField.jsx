/**
 * A `TextField` that manages a search input.
 *
 * `onSearch` is called when a search happens (by clicking or typing) with the query string as first parameter and the "deburred" string as second.
 */

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { debounce } from "lodash";
import { useSnackbar } from "notistack";

import { IconButton, InputAdornment, TextField } from "@material-ui/core";

import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";

import clean from "../utils/clean";

/**
 * A `TextField` that manages a search input.
 *
 * `onSearch` is called when a search happens (by clicking or typing) with the query string as first parameter and the "deburred" string as second.
 * @param       {Number} [delay=250] [description]
 * @param       {function} [onClear=()=>{}] [description]
 * @param       {function} [onSearch] Returns a `Promise`
 * @param       {bool}  [showClear] If `true` always show the *clear* button
 * @param       {object}  [SearchButtonProps={}] [description]
 * @param       {object}  [ClearButtonProps={}] [description]
 * @param       {object}  [InputProps={}] Override `TextField` `InputProps`
 * @param       {any} [others]  Forwarded to `TextField`
 * @constructor
 */
export default function SearchField({
  // Debounce delay
  delay = 250,
  //
  hideClearButton = false,
  //
  onChange = () => {},
  // Clear button callback
  onClear = () => {},
  //
  onKeyPress = () => {},
  // Search callback
  onSearch = () => Promise.reject(new Error("No search function provided")),
  //
  showClear = undefined,
  //
  value = undefined,
  // Clear button props
  ClearButtonProps = {},
  // Override `InputProps`
  InputProps = {},
  // Search button props
  SearchButtonProps = {},
  // Others are passed to TextField
  ...others
}) {
  if (showClear !== undefined) {
    // TODO: DEPRECATE: v2.0.0
    console.warn(
      "`showClear` is no longer used (since v1.18.0) and will be removed in v2.0.0. `ClearButton` is always visible and can be hidden with `hideClearButton`."
    );
  }

  // Query string
  const [query, setQuery] = useState(value);
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
    onSearch(
      query,
      clean(query, {
        lower: true,
        trim: true,
        deburr: true,
        replace_symbol: " ",
        compact_spaces: true
      })
    )
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
    // eslint-disable-next-line
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
    onKeyPress(e);
  };

  // Handle change events
  const handleChange = e => {
    const {
      target: { value }
    } = e;
    setQuery(value);
    onChange(e);
  };

  return (
    <TextField
      type="text"
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      value={value}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton
              onClick={handleSearch}
              disabled={searching}
              {...SearchButtonProps}
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            {(!!query || !hideClearButton) && (
              <IconButton onClick={handleClear} {...ClearButtonProps}>
                <ClearIcon />
              </IconButton>
            )}
          </InputAdornment>
        ),
        ...InputProps
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
