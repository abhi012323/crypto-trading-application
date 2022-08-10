import React from "react";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from ".";

afterEach(cleanup);
test("Checking Footer", () => {
  render(<Footer footerArray={["Dashboard"]} />);
  const text = screen.getByText("Dashboard");
  expect(text).toBeInTheDocument();
});

test("Checking Footer", () => {
  render(<Footer footerArray={["Careers"]} />);
  const text = screen.getByText("Careers");
  expect(text).toBeInTheDocument();
});

test("Checking Footer", () => {
  render(<Footer footerArray={["Legal & Privacy"]} />);
  const text = screen.getByText("Legal & Privacy");
  expect(text).toBeInTheDocument();
});

test("Testing for dropdown", async () => {
  const screen = render(
    <Footer footerArray={["Dashboard", "Careers", "Legal & Privacy"]} />
  );
  const buttons = screen.getAllByRole("button");

  fireEvent.click(buttons[0]);
});
