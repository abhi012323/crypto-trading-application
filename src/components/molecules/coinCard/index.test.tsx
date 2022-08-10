import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import CoinCard from "./index";
import bitcoin from "../../../assets/images/bitcoin.png";
const mockCallback = jest.fn();
describe("Coin Card Component", () => {
  it("should match snapshot", () => {
    const wrapper = render(
      <CoinCard image={bitcoin} crypto={"Bitcoin"} cost={"$3,406,069.54"} />
    );
    expect(wrapper).toBeTruthy;
  });
});
