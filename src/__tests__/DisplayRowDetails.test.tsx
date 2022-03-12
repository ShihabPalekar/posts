import React from "react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import DisplayRowDetails from "../components/DisplayRowDetails";
import { fireEvent, render, screen } from "@testing-library/react";

test("Row details page renders correctly", () => {
  const component = renderer.create(
    <DisplayRowDetails navigate={undefined} selectedRow={undefined} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

describe("Input Form component", () => {
  test("renders row-details component", () => {
    render(<DisplayRowDetails navigate={() => {}} selectedRow={undefined} />);
  });

  test("back button exists", () => {
    render(<DisplayRowDetails navigate={() => {}} selectedRow={undefined} />);
    expect(screen.getByRole("back-button")).toBeInTheDocument();
  });

  test("data is displayed", () => {
    render(<DisplayRowDetails navigate={() => {}} selectedRow={undefined} />);
    expect(screen.getByRole("json-data")).toBeInTheDocument();
  });

});
