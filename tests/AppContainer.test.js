import React from "react";
import renderer from "react-test-renderer";
import AppContainer from "../src/components/AppContainer";

it("renders AppContainer", () => {
  const tree = renderer.create(<AppContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});
