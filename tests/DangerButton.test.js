import React from "react";
import renderer from "react-test-renderer";

import DangerButton from "../src/components/DangerButton";

test("DangerButton", () => {
  const component = renderer.create(<DangerButton>Danger</DangerButton>);
  const json = component.toJSON();
  expect(json.type).toBe("button");
  const [child] = json.children;
  expect(child.type).toBe("span");
  expect(child.children).toEqual(["Danger"]);
  // console.log(child);
});
