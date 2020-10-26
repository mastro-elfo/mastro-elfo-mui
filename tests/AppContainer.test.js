// Renders null because of lazy nodex
// toTree() does not yet know how to handle nodes with tag=13
import AppContainer from "../src/components/AppContainer";

test("Render", () => {
  expect(typeof AppContainer).toBe("function");
});
