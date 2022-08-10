import { fireEvent, render, screen } from "@testing-library/react";
import Header from ".";
import avatar from "../../../assets/images/avatar.png";
import chevronDown from "../../../assets/icons/chevron-down.svg";
import { MemoryRouter } from "react-router-dom";
describe("Header test", () => {
  test("Check the Header Purchase test", async() => {
    const element = render(
      <MemoryRouter>
      <Header
        title={"Dashboard"}
        button1text={"SELL"}
        button2text={"BUY"}
        image={avatar}
        src={chevronDown}
        width={"12.73px"}
        height={"7.8px"}
      />
      </MemoryRouter>
    );
    const button=await screen.findByText("SELL")
    fireEvent.click(button,{button:0})
    expect(element).toBeTruthy()
  });
  test("Check the Header Selling test", async() => {
    const element = render(
      <MemoryRouter>
      <Header
        title={"Dashboard"}
        button1text={"BUY"}
        button2text={"SELL"}
        image={avatar}
        src={chevronDown}
        width={"12.73px"}
        height={"7.8px"}
      />
      </MemoryRouter>
    );
    let button=await screen.findByText("BUY")
    fireEvent.click(button,{button:0})
    button=await screen.findByText("SELL")
    fireEvent.click(button,{button:0})
    expect(element).toBeTruthy()
  });
});
