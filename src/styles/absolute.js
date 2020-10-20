import { styled } from "@material-ui/core/styles";

/**
 * Applies `position: "absolute"` to `Component`
 * @param  {elementType} Component Input component
 * @param {any} props              Style properties
 * @return {elementType}           Absolute component
 */
export default (Component, ...props) =>
  styled(Component)({
    position: "absolute",
    ...props
  });
