import React from "react";
import renderer from "react-test-renderer";

import { HashRouter } from "react-router-dom";
import Push from "../src/components/Push";

test("Push with label", () => {
  const component = renderer.create(
    <HashRouter>
      <Push href="/push">Push</Push>
    </HashRouter>
  );
  const {
    children,
    props: { onClick },
    type,
  } = component.toJSON();
  expect(type).toBe("span");
  expect(typeof onClick).toBe("function");
  expect(children).toEqual(["Push"]);
});

test("Push with element", () => {
  const component = renderer.create(
    <HashRouter>
      <Push href="/push">
        <div>Push</div>
      </Push>
    </HashRouter>
  );
  const {
    children,
    props: { onClick },
    type,
  } = component.toJSON();
  expect(type).toBe("div");
  expect(typeof onClick).toBe("function");
  expect(children).toEqual(["Push"]);
});
