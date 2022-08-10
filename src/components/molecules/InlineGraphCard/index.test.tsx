import { render, screen } from "@testing-library/react";
import InlineGraphCard from ".";
import { data } from "../../../utils/const";
import Eth from "../../../assets/icons/Eth.svg";
global.ResizeObserver = require("resize-observer-polyfill");
describe("Inline GraphCard Suite", () => {
  test("Test ", () => {
    const element = render(
      <InlineGraphCard
        name="Ethereum"
        value="$24000"
        timePeriod="24 h"
        icon={Eth}
        data={data}
        changePercent={-2.58}
      />
    );
    expect(element).toBeTruthy();
  });
  test("positive percent test", () => {
    const element = render(
      <InlineGraphCard
        name="Ethereum"
        value="$24000"
        timePeriod="24 h"
        icon={Eth}
        data={data}
        changePercent={2.58}
      />
    );
    expect(element).toBeTruthy();
  });
});
