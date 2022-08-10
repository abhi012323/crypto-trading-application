import { render, screen } from "@testing-library/react";
import Portfolio from ".";
import BooksReadCard from "../../molecules/rowCard";
import BTC from "../../../assets/images/bitcoin.png";
describe("Portfolio ", () => {
  it("Test for Portfolio card", () => {
    const element = render(
      <Portfolio>
        {" "}
        <BooksReadCard
          image={BTC}
          crypto="Bitcoin"
          currency="BTC"
          value="$ 230,966.85"
          loss={-6.85}
        />
      </Portfolio>
    );
    expect(element).toBeTruthy();
  });
});
