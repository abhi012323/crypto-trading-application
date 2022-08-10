import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";


import PaymentSuccessful from ".";
describe("page payment success test", () => {
  test("Truth test", () => {
   const element= render(
    <MemoryRouter>
      <PaymentSuccessful
        headerTitle="Checkout"
        primaryButtonText="SELL"
        secondaryButtonText="BUY"
        modeOfPayment="BUY"
        amount={0.023451}
      />
      </MemoryRouter>
    );
    expect(element).toBeTruthy()
  });
});
