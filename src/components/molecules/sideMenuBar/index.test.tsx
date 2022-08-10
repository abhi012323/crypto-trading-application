import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import SideMenuBar from "./index";

describe("Side menu bar component", () => {
  it("should render ", () => {
    const wrapper = render(
      <MemoryRouter>
        <SideMenuBar />
      </MemoryRouter>
    );
    expect(wrapper).toBeTruthy;
  });
});
