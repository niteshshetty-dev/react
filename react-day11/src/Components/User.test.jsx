import { render, screen } from "@testing-library/react";
import { vi, test, expect } from "vitest";
import User from "./User";

test("Checking the listitem", async () => {
  render(<User />);

  window.fetch = vi.fn().mockResolvedValueOnce({
    json: () => Promise.resolve([{ name: "thesh" }]),
  });

  const li = await screen.findAllByRole("listitem");
  expect(li).not.toHaveLength(0);
});
