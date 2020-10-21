import { createContext, useContext } from "react";

/**
 * Used only in `ThemeWrapper`
 *
 * Use `usePalette`
 *
 * @type {object}
 */
export const Context = createContext({});

/**
 * Hook that returns the current *palette*
 *
 * Returns an array like react's `useState`
 *
 * @return {array} `[palette, setPalette]`
 */
export function usePalette() {
  return useContext(Context);
}
