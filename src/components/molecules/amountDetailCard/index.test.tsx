import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import AmountDetailCard from "./index";
import Button from "../../atoms/button";
const mockCallback = jest.fn();
describe("Amount Detail Card Component", () => {
  test("should match snapshot", () => {
    const wrapper = render(
      <AmountDetailCard amount={"$34,000.00"} text={"Buy max"} />
    );
    expect(wrapper).toBeTruthy;
  });
  test("Click Test for Buy max", () => {
    render(
      <Button
        text="Buy max"
        buttonVariant="contained"
        type="primary"
        onClick={() => {}}
      />
    );
    const element = screen.getByText("Buy max");
    fireEvent.click(element, { button: 0 });
    expect(element.onclick).toBeTruthy();
  });
});
