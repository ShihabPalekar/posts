import React from "react";
import renderer from "react-test-renderer";
import DisplayRowDetails from "../components/DisplayRowDetails";

test("Row details page renders correctly", () => {
  const component = renderer.create(
    <DisplayRowDetails navigate={undefined} selectedRow={undefined} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
