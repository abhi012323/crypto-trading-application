import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SelectingCrypto from "./index";
import bitcoin from "../../../assets/images/bitcoin.png";
it("Selecting Crypto Card should Render", () => {
  render(
    <SelectingCrypto
      title="Choose crypto"
      cryptos={[
        {
          image: bitcoin,
          crypto: "Bitcoin",
          cost: "$3,406,069.54",
        },
      ]}
    />
  );
  const crypto = screen.getByText("Bitcoin");
  expect(crypto).toBeInTheDocument();
  const cost = screen.getByText("$3,406,069.54");
  expect(cost).toBeInTheDocument();
});
