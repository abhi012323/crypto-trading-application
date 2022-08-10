import { render, screen } from "@testing-library/react";
import Avatar from ".";
import avatar from "../../../assets/images/avatar.png";
import "@testing-library/jest-dom";

it("should renders the avatar", () => {
  render(<Avatar image={avatar} />);
  const ReactElement = screen.getByTestId("avatar");
  expect(ReactElement).toBeInTheDocument();
});
