import { render, screen } from "@testing-library/react";
import RecentTransactionCard from ".";

describe("Recent Transaction card Test", () => {
  it("Purchase test", () => {
    const element = render(
      <RecentTransactionCard
        date="Jan 14"
        type="Purchased"
        name="Bitcoin BTC"
        cryptoValue="0.02345"
        dollarValue="34,000.00"
        symbol="BTC"
      />
    );
   
    expect(element).toBeTruthy();
  });
  it("Sold Test", () => {
    const elemnet=render(
      <RecentTransactionCard
      date="Jan 14"
        type="Sold"
        name="Bitcoin BTC"
        cryptoValue="0.02345"
        dollarValue="34,000.00"
        symbol="BTC"
      />
    );
    
    expect(elemnet).toBeTruthy()
  });
});
