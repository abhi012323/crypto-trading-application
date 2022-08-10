import { render, screen } from "@testing-library/react";
import WatchList from ".";
import { data } from "../../../utils/const";
import ETH from "../../../assets/icons/Eth.svg";
global.ResizeObserver = require("resize-observer-polyfill");
describe("WatchList test suite", () => {
  test("Test of Watchlist", () => {
    const element = render(
      <WatchList
        input={[
          {
            name: "Ethereum",
            value: "$24000",
            timePeriod: "24 h",
            icon: ETH,
            data: data,
            changePercent: -5.08,
          },
        ]}
      />
    );
    expect(element).toBeTruthy();
  });
});
