import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import WalletCard from "./index";
import rupee from "../../../assets/images/rupee.png";
const mockCallback = jest.fn();
describe("Wallet Card Component", () => {
  it("should match snapshot", () => {
    const wrapper = render(
      <WalletCard
        image={rupee}
        coin={"USD Coin"}
        wallet={"US Dollar"}
        amount={"$ 34,000.00"}
        title={"My wallets"}
      />
    );
    expect(wrapper).toBeTruthy;
  });
});
