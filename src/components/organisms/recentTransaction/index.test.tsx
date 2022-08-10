import { screen, render, fireEvent } from "@testing-library/react";
import RecentTransaction from ".";

describe("Recent Transaction Suite", () => {
  it("Card Testing", () => {
    render(
      <RecentTransaction
      dateList={["June 23"]}
      onClickViewAll={()=>console.log("Testing")}
      data={[ {name:"BitCoin BTC",
      dollarValue:"34,000",
      cryptoValue:"0.0234",
      type:"Purchased",
      symbol:"BTC"}]}
      />
    );
    const Element=screen.getByText("BitCoin BTC")
    fireEvent.click(screen.getByText("View All"))
    expect(Element).toBeTruthy()
    
  });
  it("Sold test in transaction",()=>{
    render(<RecentTransaction
        dateList={["June 23"]}
        onClickViewAll={()=>console.log("Testing")}
        data={[ {name:"BitCoin BTC",
        dollarValue:"34,000",
        cryptoValue:"0.0234",
        type:"Sold",
        symbol:"BTC"}]}
        />);
        const Element=screen.getByText("BitCoin BTC");
        expect(Element).toBeTruthy()
  })
});
