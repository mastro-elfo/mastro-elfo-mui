/**
 *
 */

import { styled } from "@material-ui/core/styles";

export default Component => {
  console.warn("Use styles/absolute");
  return styled(Component)({
    position: "absolute"
  });
};
