import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import CheckoutSuccess from ".";
const mockCallback = jest.fn();
describe("CheckoutSuccess Component", () => {
  it("should match snapshot", () => {
    const wrapper = render(
      <CheckoutSuccess cost={0.023451} modeOfPayement={"BUY"} />
    );
    expect(wrapper).toBeTruthy;
  });
});
