import React from "react";
import renderer from "react-test-renderer";
import { renderers } from "../src/utils/markdown-renderers";
import { HashRouter } from "react-router-dom";

const EM = renderers.emphasis;
const Heading = renderers.heading;
const A = renderers.link;
const UL = renderers.list;
const LI = renderers.listItem;
const P = renderers.paragraph;
const Strong = renderers.strong;

test("Emphasis", () => {
  const component = renderer.create(<EM>Emphasis</EM>);
  const json = component.toJSON();
  // console.log(json);
  expect(json.type).toBe("em");
});

test("Heading", () => {
  const component = renderer.create(<Heading level={1}>Heading</Heading>);
  const json = component.toJSON();
  // console.log(json);
  expect(json.type).toBe("h1");
});

test("Link", () => {
  const inner = renderer.create(
    <HashRouter>
      <A href="/inner/path">Link</A>
    </HashRouter>
  );
  const http = renderer.create(<A href="http://url">Http Url</A>);
  const https = renderer.create(<A href="https://url">Https Url</A>);
  const innerJson = inner.toJSON();
  const httpJson = http.toJSON();
  const httpsJson = https.toJSON();
  expect(innerJson.type).toBe("a");
  expect(httpJson.type).toBe("a");
  expect(httpsJson.type).toBe("a");
});
//
test("List", () => {
  const ul = renderer.create(<UL></UL>);
  const ol = renderer.create(<UL ordered={true}></UL>);
  const li = renderer.create(<LI></LI>);
  const ulJson = ul.toJSON();
  const olJson = ol.toJSON();
  const liJson = li.toJSON();
  expect(ulJson.type).toBe("ul");
  expect(olJson.type).toBe("ol");
  expect(liJson.type).toBe("li");
});

test("Paragraph", () => {
  const component = renderer.create(<P>Paragraph</P>);
  const json = component.toJSON();
  expect(json.type).toBe("p");
});

test("Strong", () => {
  const component = renderer.create(<Strong>Strong</Strong>);
  const json = component.toJSON();
  // console.log(json);
  expect(json.type).toBe("strong");
});
