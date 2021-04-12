import React, { useState } from "react";

// Customize main theme
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Context } from "../utils/usePalette";

/**
 * Theme wrapper
 * @param       {node} children [description]
 * @param       {any} props    [description]
 * @constructor
 * @see https://material-ui.com/customization/theming/#createmuitheme-options-args-theme
 */
export default function ThemeWrapper({ children, ...props }) {
  const { palette: defaultPalette } = props;
  const [palette, setPalette] = useState(defaultPalette);
  const THEME = createMuiTheme({
    ...props,
    palette: { ...palette, ...props.palette },
  });

  return (
    <Context.Provider value={[palette, setPalette]}>
      <MuiThemeProvider theme={THEME}>{children}</MuiThemeProvider>
    </Context.Provider>
  );
}
