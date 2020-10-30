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
    type,
    props: { onClick }
  } = component.toJSON();
  expect(type).toBe("span");
  expect(typeof onClick).toBe("function");
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
    type,
    props: { onClick }
  } = component.toJSON();
  expect(type).toBe("div");
  expect(typeof onClick).toBe("function");
});
