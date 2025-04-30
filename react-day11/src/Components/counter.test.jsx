import { fireEvent, render, screen } from "@testing-library/react";
import { test, expect, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";
import Counter from "./counter";

// beforeEach(() => {
//   render(<Counter />);
// });

// test("Initial value of counter must be 0", async () => {
//   const counter1 = screen.getByTestId("cnt");
//   expect(counter1.textContent).toBe("0");
//   const button1 = screen.getByTestId("btn");
//   await userEvent.click(button1);
//   expect(counter1.textContent).toBe("1");
// });

// test("Input default value should be 10", () => {
//   const input1 = screen.getByTestId("input");
//   expect(input1.value).toBe("10");
//   fireEvent.change(input1, { target: { value: 11 } });
//   expect(input1.value).toBe("11");
// });

test("Checking with snapshot", () => {
  expect(render(<Counter />)).toMatchSnapshot();
});
