import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";

test("should cant click", () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("should load/spinn", () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span")).toBeInTheDocument();
});

test("should render <a> tag", () => {
  const { container } = render(<Button type="link" isExternal></Button>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});

// test("should render aja tag", () => {
//     const { container } = render(
//       <Button type="link"></Button>
//     );
  
//     expect(container.querySelector("a")).toBeInTheDocument();
//   });
