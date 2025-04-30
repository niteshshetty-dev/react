import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import App from "./App";

test("renders Hello World text", () => {
  render(<App />);
  const helloWorldText = screen.getByText(0);
  expect(helloWorldText).toBeInTheDocument();
});
