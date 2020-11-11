import React from "react";
import renderer from "react-test-renderer";
import Markdown from "react-markdown";
import { renderers } from "../src/utils/markdown-renderers";

test("Emphasis", () => {
  const component = renderer.create(<Markdown>*emphasis*</Markdown>);
  const json = component.toJSON();
  // console.log(json);
  const [child] = json.children;
  const [content] = child.children;
  expect(json.type).toBe("p");
  expect(child.type).toBe("em");
});

test("Heading", () => {
  const component = renderer.create(
    <Markdown>
      {`
# H1
## H2
### H3
#### H4
##### H5
###### H6`}
    </Markdown>
  );
  const json = component.toJSON();
  const [h1, h2, h3, h4, h5, h6] = json;
  expect(h1.type).toBe("h1");
  expect(h2.type).toBe("h2");
  expect(h3.type).toBe("h3");
  expect(h4.type).toBe("h4");
  expect(h5.type).toBe("h5");
  expect(h6.type).toBe("h6");
});

test("Link", () => {
  const component = renderer.create(
    <Markdown>{`[link](/location "title")[link](http://location "title")[link](https://location "title")`}</Markdown>
  );
  const json = component.toJSON();
  // console.log(json);
  const [a1, a2, a3] = json.children;
  // console.log(a1.props);
  // console.log(a2.props);
  // console.log(a3.props);
  expect(a1.type).toBe("a");
  expect(a2.type).toBe("a");
  expect(a3.type).toBe("a");
  expect(a1.props.href).toBe("/location");
  expect(a2.props.href).toBe("http://location");
  expect(a3.props.href).toBe("https://location");
  expect(a1.props.title).toBe("title");
  expect(a2.props.title).toBe("title");
  expect(a3.props.title).toBe("title");
});

test("List", () => {
  const component = renderer.create(
    <Markdown>
      {`* item1
  * subitem1.1
* item2
  * subitem2.1
* item3
  * subitem3.1`}
    </Markdown>
  );
  const json = component.toJSON();
  console.log(json.children[0].children);
  expect(json.type).toBe("ul");
  expect(json.children.every(({ type }) => type === "li")).toBe(true);
  expect(
    json.children.every(({ children: [_, { type }] }) => type === "ul")
  ).toBe(true);
});

test("Paragraph", () => {
  const component = renderer.create(<Markdown>paragraph</Markdown>);
  const json = component.toJSON();
  expect(json.type).toBe("p");
});

test("Strong", () => {
  const component = renderer.create(<Markdown>**strong**</Markdown>);
  const json = component.toJSON();
  // console.log(json);
  const [child] = json.children;
  const [content] = child.children;
  expect(json.type).toBe("p");
  expect(child.type).toBe("strong");
});
