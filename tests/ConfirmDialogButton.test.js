import React from "react";
import renderer from "react-test-renderer";

import ConfirmDialogButton from "../src/components/ConfirmDialogButton";

function Custom({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

test("Render Component", () => {
  const component = renderer.create(
    <ConfirmDialogButton Component={Custom} data-custom={true}>
      <span />
    </ConfirmDialogButton>
  );
  const tree = component.toJSON();
  expect(tree).toBeTruthy();
});
