import React from "react";
import { render } from "@testing-library/react";
import Cell from "./Cell";

//Smoke Test
test("That Cell component will render without crashing", () => {
  render(<Cell isLit={false} onClick={() => console.log("clicked")} />);
});

//Snapshot Test for "off" cell
test("That correct class is applied when isLit = false", () => {
  const { asFragment } = render(<Cell isLit={false} />);
  console.log(asFragment)
  expect(asFragment()).toMatchSnapshot();
});

//Snapshot Test for "on" cell
test("correct class is applied when isLit = true", () => {
  const { asFragment } = render(<Cell isLit={true} />);

  expect(asFragment()).toMatchSnapshot();
});
