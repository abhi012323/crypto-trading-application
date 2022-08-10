import React from "react";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import Timeperiod from ".";
import "@testing-library/jest-dom";

afterEach(cleanup);
test("Checking Timeperiod text1", () => {
  render(<Timeperiod />);
  const text1 = screen.getByText("1H");
  expect(text1).toBeInTheDocument();
});

test("Testing Click of 24H", () => {
  const func = () => {
    console.log("24H Tab is clicked");
  };
  render(<Timeperiod />);
  fireEvent.click(screen.getByText("24H"));
});

test("Testing Click of 1W", () => {
  const func = () => {
    console.log("1W Tab is clicked");
  };
  render(<Timeperiod />);
  fireEvent.click(screen.getByText("1W"));
});

test("Testing Click of 1M", () => {
  const func = () => {
    console.log("1M Tab is clicked");
  };
  render(<Timeperiod />);
  fireEvent.click(screen.getByText("1M"));
});
