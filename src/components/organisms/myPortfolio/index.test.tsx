import { render, screen } from "@testing-library/react";
import MyPortfolio from ".";
import {data} from "../../../utils/const"
global.ResizeObserver=require('resize-observer-polyfill')
describe("MyPortfolio Graph", () => {
  test("MyPortfolio test", () => {
    const element = render(
      <MyPortfolio
        legendData={["Bitcoin", "Ethereum"]}
        changePercent={[-2.89, 1.05]}
        graph={{
          graphSource: data,
          borderColorGraph1: "#FFA74F",
          borderColorGraph2: "#0052FF",
          fillColorGraph1: "#d4e1fc",
          fillColorGraph2: "rgb(255, 246, 237,0.7)",
          multiGraph: true,
          showAxisLine: true,
          showTicks: true,
        }}
      />
    );
    expect(element).toBeTruthy()
  });
  test("Another test",()=>{
    const element = render(
        <MyPortfolio
          legendData={["Bitcoin", "Ethereum"]}
          changePercent={[2.89, -1.05]}
          graph={{
            graphSource: data,
            borderColorGraph1: "#FFA74F",
            borderColorGraph2: "#0052FF",
            fillColorGraph1: "#d4e1fc",
            fillColorGraph2: "rgb(255, 246, 237,0.7)",
            multiGraph: true,
            showAxisLine: true,
            showTicks: true,
          }}
        />
      );
      expect(element).toBeTruthy()
  })
});
