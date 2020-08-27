/**
 * Use `error` palette to create a "danger" component
 */

// https://material-ui.com/styles/api/#styled-component-styles-options-component
import { styled } from "@material-ui/core/styles";

export default Component => {
  console.warn("Use styles/danger");
  return styled(Component)(
    ({
      theme: {
        palette: {
          error: { contrastText, main, dark }
        }
      }
    }) => ({
      color: contrastText,
      backgroundColor: main,
      "&:hover": {
        backgroundColor: dark
      }
    })
  );
};
