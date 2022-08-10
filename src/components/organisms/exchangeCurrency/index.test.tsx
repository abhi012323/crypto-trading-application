import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ExchangeCurrency from "./index";

it("Exchange Currency Card should Render", () => {
  render(
    <ExchangeCurrency
      title="Choose crypto"
      amount={"$34,000.00"}
      crypto={"BTC"}
      convertedAmount={"0.0234510 "}
      text={"Buy max"}
      conversion={"1BTC = $3,406,069.54"}
    />
  );
  const crypto = screen.getByText("BTC");
  expect(crypto).toBeInTheDocument();
  const amount = screen.getByText("$34,000.00");
  expect(amount).toBeInTheDocument();
});
