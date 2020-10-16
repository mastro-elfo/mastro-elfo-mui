// console.log(arguments);
// console.log(process.argv);

if (process.argv.length < 3) {
  console.error("A template name is required");
  console.error(process.argv.join(" "), "<template name>");
  process.exit(1);
}

const name = process.argv[2];
const capital = name[0].toUpperCase() + name.substr(1).toLowerCase();

const template = `
import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export function use<Page>() {
  return useContext(Context);
}

export default function <Page>Provider({ children, defaultValue }) {
  const value = useState(defaultValue);
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
`;

const output = template.replace(/<Page>/g, capital);
console.info(output);
