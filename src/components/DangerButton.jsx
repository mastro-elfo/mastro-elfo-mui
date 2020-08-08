/**
 * Use `error` palette to create a "danger" button
 */

// https://material-ui.com/styles/api/#styled-component-styles-options-component
import { styled } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

export default styled(Button)(
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
