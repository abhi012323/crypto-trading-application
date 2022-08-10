import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import CryptoCurrency from ".";
import { MemoryRouter } from "react-router-dom";
const mockCallback = jest.fn();
describe("Wallet Card Component", () => {
  it("should match snapshot", () => {
    const wrapper = render(
      <MemoryRouter>
        <CryptoCurrency
          cost={0.023451}
          amount={"3,406,069.54"}
          BuyAmount={"34,000.00"}
          modeOfPayment="BUY"
        />
      </MemoryRouter>
    );
    expect(wrapper).toBeTruthy;
  });
});
