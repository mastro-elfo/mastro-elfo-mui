import React from "react";
import renderer from "react-test-renderer";
import { AbsoluteCircularProgress } from "../";

function Component() {
  return <div />;
}

it("renders AbsoluteCircularProgress", () => {
  const tree = renderer.create(<AbsoluteCircularProgress />).toJSON();
  expect(tree).toMatchSnapshot();
});
