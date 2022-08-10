import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PurchasePage from "./index";

it("renders Purchase Page", () => {
  render(
    <MemoryRouter>
      <PurchasePage />
    </MemoryRouter>
  );
  const testIcon = screen.getByTestId("purchasepage-id");
  expect(testIcon).toBeInTheDocument();
});
