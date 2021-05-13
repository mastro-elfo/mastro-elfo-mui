import React, { useState } from "react";
import { Context } from "../utils/useConfig";

export default function ConfigProvider({ children, ...defaultValue }) {
  const value = useState({ BackIconButton: {}, TopFab: {}, ...defaultValue });
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
