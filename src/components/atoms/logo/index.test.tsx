import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import Logo from ".";
import logo from "../../../assets/icons/logo.svg";
it("renders mui icons", () => {
  render(<Logo src={logo} width={"18.64px"} height={"15.93px"} />);
  const testIcon = screen.getByTestId("logo");
  expect(testIcon).toBeInTheDocument();
});
