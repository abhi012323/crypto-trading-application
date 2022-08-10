import { render, screen } from "@testing-library/react";
import Graph from ".";
import { data } from "../../../utils/const";
global.ResizeObserver = require("resize-observer-polyfill");
describe("Graph test suite", () => {
  test("Graph test", () => {
    const element = render(
      <Graph
        borderColorGraph1="#46BF31"
        fillColorGraph1="#E9F7EC"
        multiGraph={false}
        showAxisLine={false}
        showTicks={false}
        graphSource={data}
      />
    );
    expect(element).toBeTruthy();
  });
});
