import React from "react";
import PropTypes from "prop-types";

import { Container, Draggable } from "react-smooth-dnd";

import { List, ListItemIcon } from "@material-ui/core";

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
 * @param {ListItem} children
 * @param {Component} [Handler]
 * @param {String} [handlerClass]
 * @param {Function} [onDrop] Callback function, called when an item is dropped
 * @param {Boolean} [right=false] If `true` handler is on the right
 * @param {Object} [ContainerProps={}]
 * @param {any} rest Forwarded to `List`
 * @constructor
 */
export default function SortableList({
  children,
  handler,
  handlerClass = "handler",
  onDrop = () => {},
  right = false,
  ContainerProps = {},
  ...rest
}) {
  // If handler is undefined, use default handler
  if (handler === undefined) {
    handler = <Handler className={handlerClass} />;
  }
  // Render
  return (
    <List {...rest}>
      <Container
        dragHandleSelector={`.${handlerClass}`}
        lockAxis="y"
        onDrop={onDrop}
        {...ContainerProps}
      >
        {!children.map
          ? mapper(children, handler, right)
          : children.map((item) => mapper(item, handler, right))}
      </Container>
    </List>
  );
}

SortableList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  handler: PropTypes.element,
  onDrop: PropTypes.func,
  right: PropTypes.bool,
};

// This is not a Component
// This function wraps `element` with `Draggable`
// `key` is passed to `Draggable`, `ref` preserved
// Also `handler` is added before or after `children` depending on the value of `right`
function mapper(element, handler, right) {
  const {
    key,
    props: { children, ...rest },
    ref,
  } = element;
  return (
    <Draggable key={key}>
      <element.type {...rest} ref={ref}>
        {!right && handler}
        {children}
        {!!right && handler}
      </element.type>
    </Draggable>
  );
}

function Handler({ className = "handler", IconProps = {}, ...rest }) {
  return (
    <ListItemIcon {...rest}>
      <DragHandleIcon className={className} {...IconProps} />
    </ListItemIcon>
  );
}
