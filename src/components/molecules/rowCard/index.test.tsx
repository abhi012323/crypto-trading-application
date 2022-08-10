import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import RowCard from "./index";
import ethereum from "../../../assets/images/ethereum.png";
const mockCallback = jest.fn();
describe("Row Card Component", () => {
  it("should match snapshot", () => {
    const wrapper = render(
      <RowCard
        image={ethereum}
        crypto={"Ethereum"}
        currency={"ETH"}
        value={"$ 230,966.85"}
        loss={6.85}
      />
    );
    expect(wrapper).toBeTruthy;
  });
});
