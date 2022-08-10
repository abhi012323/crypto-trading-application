import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Icon from "./index";
import dashboard from "../../../assets/icons/dashboard.svg";
import React from "react";

it("renders mui icons", () => {
  render(<Icon src={dashboard} width={"12.73px"} height={"7.8"} />);
  const testIcon = screen.getByTestId("icon");
  expect(testIcon).toBeInTheDocument();
});
