import React, { Fragment, cloneElement, useState } from "react";
import { IconButton, Menu } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

/**
 * MenuIconButton - creates an `IconButton` with `MoreVertIcon`. When clicked opens a `Menu` with `children` as `MenuItem`s. Click on a child to fire its own `onClick` and close the menu.
 *
 * @param  {node} children `MenuItem`[s]
 * @param  {object} MenuProps={} Properties for the `Menu` component
 * @param  {any} props The rest is passed to `IconButton` component
 * @constructor
 * @see https://material-ui.com/api/menu/
 * @see https://material-ui.com/components/menus/#limitations
 */
export default function MenuIconButton({ children, MenuProps = {}, ...props }) {
  // If not null the menu is open
  const [anchor, setAnchor] = useState(null);

  // Handlers
  const handleOpen = ({ currentTarget }) => setAnchor(currentTarget);
  const handleClose = () => setAnchor(null);

  // Map children to catch the onClick and close the menu
  const mapper = (element) =>
    cloneElement(element, {
      onClick: (e) => {
        handleClose();
        element.props.onClick(e);
      },
    });

  return (
    <Fragment>
      <IconButton onClick={handleOpen} {...props}>
        <MoreVertIcon />
      </IconButton>
      {!!children && (
        <Menu
          anchorEl={anchor}
          open={Boolean(anchor)}
          onClose={handleClose}
          {...MenuProps}
        >
          {!children.map ? mapper(children) : children.map(mapper)}
        </Menu>
      )}
    </Fragment>
  );
}
