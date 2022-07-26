/**
 * @jest-environment jsdom
 */

import { screen } from "@testing-library/react";

import Counter from ".";

describe("Counter", () => {
  beforeEach(() => {
    render(<Counter title="test" />);
  });

  test("It displays a heading with appropriate text", () => {
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toEqual("test");
  });

  test("The counter starts at zero", () => {
    const counterOutput = screen.getByRole("figure");

    expect(counterOutput).toBeInTheDocument();
    expect(counterOutput.textContent).toEqual("0");
  });

  test("The counter increments if the plus button is clicked", async () => {
    const incrementButton = screen.getByRole("button", { name: "+" });
    const counterOutput = screen.getByRole("figure");

    expect(incrementButton).toBeInTheDocument();

    expect(counterOutput.textContent).toEqual("0");
    await userEvent.click(incrementButton);
    expect(counterOutput.textContent).toEqual("1");
  });
});
