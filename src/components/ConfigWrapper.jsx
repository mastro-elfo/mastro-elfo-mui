import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export function useConfig() {
  return useContext(Context);
}

export default function ConfigProvider({ children, ...defaultValue }) {
  const value = useState({ BackIconButton: {}, TopFab: {}, ...defaultValue });
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
