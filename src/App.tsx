import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import React from "react";

import avatar from "./assets/images/avatar.png";
import chevronDown from "./assets/icons/chevron-down.svg";

import SellPage from "./pages/sellPage";
import theme from "./theme/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import PaymentSuccessful from "./pages/paymentSuccessful";
import PurchasePage from "./pages/purchasePage";

export const App = () => {
  return (
    <MUIThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Dashboard />} />
            <Route
              path="/buy/success"
              element={
                <PaymentSuccessful
                  headerTitle="Checkout"
                  primaryButtonText="SELL"
                  secondaryButtonText="BUY"
                  modeOfPayment="BUY"
                  amount={0.023451}
                />
              }
            ></Route>
            <Route path="/buy" element={<PurchasePage />}></Route>

            <Route
              path="/sell/success"
              element={
                <PaymentSuccessful
                  headerTitle="Checkout"
                  primaryButtonText="SELL"
                  secondaryButtonText="BUY"
                  modeOfPayment="SELL"
                  amount={0.023451}
                />
              }
            ></Route>
            <Route path="/sell" element={<SellPage />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </MUIThemeProvider>
  );
};
