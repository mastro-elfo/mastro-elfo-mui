import React from "react";
import renderer from "react-test-renderer";

import For from "../src/components/For";

test("Render without props", () => {
  const component = renderer.create(<For Component={() => null} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Render null", () => {
  const component = renderer.create(<For each={null} Component={() => null} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Render undefined", () => {
  const component = renderer.create(
    <For each={undefined} Component={() => null} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Render empty", () => {
  const component = renderer.create(<For each={[]} Component={() => null} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Render", () => {
  const Component = ({ value, ...props }) => <span {...props}>{value}</span>;
  const Container = (props) => <div {...props} />;

  const component = renderer.create(
    <For
      each={Array(3).fill(true)}
      map={(_, i) => ({ value: i, "data-mapped-property": i })}
      Component={Component}
      Container={Container}
      ComponentProps={{ "data-prop": "component property" }}
      ContainerProps={{ "data-prop": "container property" }}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Filter falsy", () => {
  const component = renderer.create(
    <For
      each={[true, false, null, undefined, "", [], 0, 1]}
      Component={({ value }) => <span data-value={String(value)} />}
      map={(v) => !!v && { value: v }}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("No Component", () => {
  console.error = jest.fn();
  const component = renderer.create(<For />);
  expect(console.error).toHaveBeenCalledTimes(1);
});
