import React, { useState } from "react";
import PropTypes from "prop-types";

import { Container, Draggable } from "react-smooth-dnd";

import { List, ListItem, ListItemIcon } from "@material-ui/core";

import DragHandleIcon from "@material-ui/icons/DragHandle";

/**
 * Extends a `List` with sortable items.
 *
 * Example
 *
 * ```js
 * const handleDrop = ({ removedIndex, addedIndex }) => {}
 *
 * <SortableList onDrop={handleDrop}>
 *  <ListItem>
 *    <ListItemIcon><Icon/></ListItemIcon>
 *    <ListItemText primary secondary/>
 *    <ListItemSecondaryAction><IconButton/></ListItemSecondaryAction>
 *  <ListItem>
 * </SortableList>
 * ```
 *
 * @param       {ListItem}  children
 * @param       {Boolean} [right=false] If `true` handler is on the right
 * @param       {Function}  onDrop      Callback function, called when an item is dropped
 * @param       {Component} [Handler] If provided, must contain a component with `className="drag-handle"`
 * @param       {any}  rest          Forwarded to `List`
 * @constructor
 */
export function SortableList({
  children,
  handler = <Handler />,
  onDrop = () => {},
  right = false,
  ...rest
}) {
  return (
    <List {...rest}>
      <Container dragHandleSelector=".drag-handle" lockAxis="y" onDrop={onDrop}>
        {children.map(({ props: { children, ...rest }, key, ref }) => {
          return (
            <Draggable key={key}>
              <ListItem {...rest} ref={ref}>
                {!right && handler}
                {children}
                {!!right && handler}
              </ListItem>
            </Draggable>
          );
        })}
      </Container>
    </List>
  );
}

SortableList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.instanceOf(ListItem)),
  handler: PropTypes.element,
  onDrop: PropTypes.func,
  right: PropTypes.bool
};

function Handler() {
  return (
    <ListItemIcon>
      <DragHandleIcon className="drag-handle" />
    </ListItemIcon>
  );
}
