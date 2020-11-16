import React from "react";
import renderer from "react-test-renderer";

import NestedListTypography from "../src/components/NestedListTypography";

test("Render null", () => {
  const component = renderer.create(
    <NestedListTypography></NestedListTypography>
  );
  const json = component.toJSON();
  // console.log(json);
  expect(json).toBe(null);
});

test("Render String", () => {
  const component = renderer.create(
    <NestedListTypography>Content</NestedListTypography>
  );
  const json = component.toJSON();
  // console.log(json);
  expect(json.type).toBe("p");
  expect(json.children).toEqual(["Content"]);
});

test("Render Paragraph", () => {
  const component = renderer.create(
    <NestedListTypography>{["Content"]}</NestedListTypography>
  );
  const json = component.toJSON();
  // console.log(json);
  expect(json.type).toBe("p");
  expect(json.children).toEqual(["Content"]);
});

test("Render Item", () => {
  const component = renderer.create(
    <NestedListTypography>{[["Item"]]}</NestedListTypography>
  );
  const json = component.toJSON();
  // console.log(json);
  expect(json.type).toBe("ul");
  expect(json.children[0].type).toBe("li");
  expect(json.children[0].children).toEqual(["Item"]);
});

test("Render SubItem", () => {
  const component = renderer.create(
    <NestedListTypography>{[[["Item"]]]}</NestedListTypography>
  );
  const json = component.toJSON();
  // console.log(json.children[0]);
  expect(json.type).toBe("ul");
  expect(json.children[0].type).toBe("ul");
  expect(json.children[0].children[0].type).toBe("li");
  expect(json.children[0].children[0].children).toEqual(["Item"]);
});

test("Render node", () => {
  const component = renderer.create(
    <NestedListTypography>
      {[<strong key="1">Content</strong>]}
    </NestedListTypography>
  );
  const json = component.toJSON();
  expect(json.type).toBe("strong");
  expect(json.children).toEqual(["Content"]);
});
