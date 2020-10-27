import React from "react";
import renderer from "react-test-renderer";

import Conditional from "../src/components/Conditional";

function Component() {
  return <div>Component</div>;
}

function Alt() {
  return <div>Alt</div>;
}

test("Render with Boolean", () => {
  const component = renderer.create(
    <Conditional show={true} Component={Component} Alt={Alt} />
  );
  const alt = renderer.create(
    <Conditional show={false} Component={Component} Alt={Alt} />
  );

  expect(component.toJSON().children).toEqual(["Component"]);
  expect(alt.toJSON().children).toEqual(["Alt"]);
});

test("Render with Function", () => {
  const component = renderer.create(
    <Conditional show={() => true} Component={Component} Alt={Alt} />
  );
  const alt = renderer.create(
    <Conditional show={() => false} Component={Component} Alt={Alt} />
  );

  expect(component.toJSON().children).toEqual(["Component"]);
  expect(alt.toJSON().children).toEqual(["Alt"]);
});
