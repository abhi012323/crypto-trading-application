import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import SellPage from "./index";
import { MemoryRouter } from "react-router-dom";

it("renders SellPage", () => {
  render(
    <MemoryRouter>
      <SellPage />
    </MemoryRouter>
  );
  const testIcon = screen.getByTestId("sidebar");
  expect(testIcon).toBeInTheDocument();
});
