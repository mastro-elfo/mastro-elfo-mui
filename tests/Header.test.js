import React from "react";
import renderer from "react-test-renderer";

import Header from "../src/components/Header";

test("Render", () => {
  const component = renderer.create(<Header />);
});

// TODO: Remove warning test in v3.0.0
test("Render with warning", () => {
  global.console = { warn: jest.fn() };
  const component = renderer.create(<Header LeftAction={<span />} />);
  expect(console.warn).toBeCalled();
});

test("Render with warning", () => {
  global.console = { warn: jest.fn() };
  const component = renderer.create(<Header RightActions={<span />} />);
  expect(console.warn).toBeCalled();
});

test("Render with warning", () => {
  global.console = { warn: jest.fn() };
  const component = renderer.create(
    <Header RightActions={[<span key={0} />]} />
  );
  expect(console.warn).toBeCalled();
});
