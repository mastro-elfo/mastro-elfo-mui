import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
} from "@material-ui/core";

/**
 * [DrawerLists description]
 * @param       {Array} [lists=[]] [description]
 * @constructor
 */
export default function DrawerLists({
  // Lists
  lists = [],
}) {
  return lists.map(
    ({
      avatar = false,
      header = "",
      items = [],
      key,
      leftFill = false,
      rightFill = false,
    }) => (
      <List key={key} subheader={<ListSubheader>{header}</ListSubheader>}>
        {items
          // Filter falsy items
          .filter((item) => item)
          // Map items
          .map(({ Component = ItemComponent, ...props }) => (
            <Component
              key={key}
              avatar={avatar}
              leftFill={leftFill}
              rightFill={rightFill}
              {...props}
            />
          ))}
      </List>
    )
  );
}

DrawerLists.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      avatar: PropTypes.bool,
      header: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          key: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
            .isRequired,
          action: PropTypes.node,
          disabled: PropTypes.bool,
          icon: PropTypes.node,
          onClick: PropTypes.func,
          primary: PropTypes.string,
          secondary: PropTypes.string,
        })
      ),
      leftFill: PropTypes.bool,
      rightFill: PropTypes.bool,
    })
  ),
};

function ItemComponent({
  action = null,
  avatar = false,
  disabled = false,
  external = false,
  href = null,
  icon = null,
  leftFill = false,
  onClick = false,
  primary = "",
  rightFill = false,
  secondary = "",
  title = "",
}) {
  const { push } = useHistory();
  const innerLink = !!href && !external;
  const outerLink = !!href && !!external;
  const isButton = !!onClick || !!href;

  return (
    <ListItem
      title={title}
      button={isButton}
      disabled={disabled}
      onClick={
        outerLink
          ? window.open(href)
          : innerLink
          ? push(href)
          : isButton
          ? onClick
          : () => {}
      }
    >
      {(!!icon || leftFill) &&
        (avatar ? (
          <ListItemAvatar>{icon || <span />}</ListItemAvatar>
        ) : (
          <ListItemIcon>{icon || <span />}</ListItemIcon>
        ))}

      <ListItemText primary={primary} secondary={secondary} />

      {(!!action || rightFill) && (
        <ListItemSecondaryAction>{action || <span />}</ListItemSecondaryAction>
      )}
    </ListItem>
  );
}

ItemComponent.propTypes = {
  action: PropTypes.node,
  avatar: PropTypes.bool,
  external: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.node,
  leftFill: PropTypes.bool,
  onClick: PropTypes.func,
  primary: PropTypes.string,
  rightFill: PropTypes.bool,
  secondary: PropTypes.string,
  title: PropTypes.string,
};
