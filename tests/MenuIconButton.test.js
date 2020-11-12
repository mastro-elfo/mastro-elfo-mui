import React from "react";
import renderer from "react-test-renderer";

import MenuIconButton from "../src/components/MenuIconButton";
import { MenuItem } from "@material-ui/core";

test("Render no item", () => {
  const component = renderer.create(<MenuIconButton></MenuIconButton>);
  const json = component.toJSON();
  // console.log(json);
  expect(json.type).toBe("button");
});

test("Render one item", () => {
  const component = renderer.create(
    <MenuIconButton>
      <MenuItem key="1">One</MenuItem>
    </MenuIconButton>
  );
  const json = component.toJSON();
  // console.log(json);
  expect(json.type).toBe("button");
});

test("Render more items", () => {
  const component = renderer.create(
    <MenuIconButton>
      <MenuItem key="1">One</MenuItem>
      <MenuItem key="2">Two</MenuItem>
    </MenuIconButton>
  );
  const json = component.toJSON();
  // console.log(json);
  expect(json.type).toBe("button");
});
