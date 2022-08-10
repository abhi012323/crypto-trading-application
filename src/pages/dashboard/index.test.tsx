import Dashboard from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
global.ResizeObserver = require("resize-observer-polyfill");
describe("Dashboard test", () => {
  test("Creative test", async () => {
    const element = render(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    );
    expect(screen.findByText("Bitcoin")).toBeTruthy();
    const button = await screen.findByText("View All");
    fireEvent.click(button, { button: 0 });
    expect(element).toBeTruthy();
  });
});
