import React from "react";
import renderer from "react-test-renderer";

import PasswordField from "../src/components/PasswordField";

test("PasswordField", () => {
  const component = renderer.create(<PasswordField />);
  const json = component.toJSON();

  expect(json.type).toBe("div");
  expect(json.children.length).toBe(1);

  const [form_control] = json.children;
  expect(form_control.type).toBe("div");
  expect(typeof form_control.children).toBe("object");

  const [input, button] = form_control.children;
  expect(input.type).toBe("input");
  expect(button.type).toBe("div");

  // console.log(form_control.children);
});
