import PropTypes from "prop-types";

/**
 * Renders `children` if `show` is `true`.
 *
 * `alt` defaults to `null` and is rendered when `show` is `false`.
 * If `show` is a function, it is evaluated and its return value is used as condition.
 * @param       {node} [alt=null]  [description]
 * @param       {node} children    [description]
 * @param       {Boolean} [show=false]            [description]
 * @constructor
 */
export default function Condition({ alt = null, children, show = false }) {
  const condition = !!(typeof show === "function" ? show() : show);
  return condition ? children : alt;
}

Condition.propTypes = {
  alt: PropTypes.node,
  children: PropTypes.node,
  show: PropTypes.any
};
