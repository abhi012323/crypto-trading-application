import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import DeliveryDropdown from ".";
const mockCallback = jest.fn();
describe("Dropdown delivery Component", () => {
  it("should match snapshot", () => {
    const wrapper = render(
      <DeliveryDropdown
        instantTime="2-5"
        fee="0.001"
        title="Select speed delivery"
      />
    );
    expect(wrapper).toBeTruthy;
  });
});
