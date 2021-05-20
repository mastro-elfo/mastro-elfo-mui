import { createContext, useContext } from "react";

export const Context = createContext();

export function useConfig() {
  return useContext(Context);
}
