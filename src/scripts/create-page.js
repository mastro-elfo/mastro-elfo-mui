// console.log(arguments);
// console.log(process.argv);

if (process.argv.length < 3) {
  console.error("A template name is required");
  console.error(process.argv.join(" "), "<template name>");
  process.exit(1);
}

const name = process.argv[2];
const lower = name.toLowerCase();
const capital = name[0].toUpperCase() + name.substr(1).toLowerCase();

const template = `
import React from "react";
import { BackIconButton, Content, Header, Page } from "mastro-elfo-mui";
import BrokenImageIcon from "@material-ui/icons/BrokenImage";

function Component() {
  return (
    <Page
      header={<Header LeftAction={<BackIconButton />}><Page></Header>}
      content={<Content><Page> content</Content>}
    />
  );
}

export const route = {
  path: "/<page>",
  exact: true,
  component: Component
};

export const drawer = {
  key: "<page>",
  primary: "<Page>",
  secondary: "",
  icon: <BrokenImageIcon/>,
  title: "Open <Page>"
}
`;

const output = template.replace(/<page>/g, lower).replace(/<Page>/g, capital);
console.info(output);
