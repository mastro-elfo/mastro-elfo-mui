import React from "react";
import renderer from "react-test-renderer";

import LoginForm from "../src/components/LoginForm";

test("FileField", () => {
  const component = renderer.create(<LoginForm />);
  const json = component.toJSON();
  // console.log(json);
  expect(json.type).toBe("ul");
  expect(json.children.length).toBe(3);

  const lis = json.children;
  // console.log(lis);
  expect(lis.map(({ type }) => type)).toEqual(Array(3).fill("li"));

  const username = lis[0].children[0];
  const password = lis[1].children[0];
  const login = lis[2].children[0];
  // console.log(username.children[0], password, login);
  expect(username.children[0].children[0]).toBe("Username");
  expect(password.children[0].children[0]).toBe("Password");
  expect(login.children[0].children[0]).toBe("Login");
});
