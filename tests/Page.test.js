import React from "react";
import renderer from "react-test-renderer";

import ConfigWrapper from "../src/components/ConfigWrapper";
import Page from "../src/components/Page";
import Header from "../src/components/Header";
import Content from "../src/components/Content";

test("Render", () => {
  const component = renderer.create(
    <ConfigWrapper>
      <Page
        header={<Header>Header</Header>}
        content={<Content>Content</Content>}
        footer={<div>Footer</div>}
        print={<div>Print</div>}
      />
    </ConfigWrapper>
  );
  const json = component.toJSON();
  expect(json).toMatchSnapshot();
});
