/**
 * Organizes a List with optional SubHeader
 *
 * If `results` is `null` or `undefined`, then prints nothing.
 *
 * Otherwise `results` must be an array, for each item `mapper` is called and must provide at least a unique `key`.
 *
 * Also `LeftIcon` and `RightIcon` are used inside a `ListItemIcon`, and `primary` and `secondary` are used with `ListItemText`.
 *
 * Anything else is passed to `ListItem`. By default `onClick` sets `button` to `true`.
 */

import React from "react";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from "@material-ui/core";

export default function({ subheader, mapper = r => r, results, ...others }) {
  // TODO: When ready use Condition?

  if (results === null || results === undefined) return null;
  return (
    <List
      subheader={!!subheader && <ListSubheader>{subheader}</ListSubheader>}
      {...others}
    >
      {results.map(r => {
        const {
          LeftIcon,
          RightIcon,
          primary,
          secondary,
          onClick,
          ...others
        } = mapper(r);
        return (
          <ListItem button={!!onClick} onClick={onClick} {...others}>
            {!!LeftIcon && <ListItemIcon>{LeftIcon}</ListItemIcon>}

            <ListItemText primary={primary} secondary={secondary} />

            {!!RightIcon && <ListItemIcon>{RightIcon}</ListItemIcon>}
          </ListItem>
        );
      })}
    </List>
  );
}
