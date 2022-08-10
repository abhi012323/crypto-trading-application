import { ComponentStory, ComponentMeta } from "@storybook/react";
import Header from "./index";
import avatar from "../../../assets/images/avatar.png";
import chevronDown from "../../../assets/icons/chevron-down.svg";

export default {
  title: "Organisms/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;
export const Main = Template.bind({});
Main.args = {
  title: "Dashboard",
  button1text: "SELL",
  button2text: "BUY",
  image: avatar,
  src: chevronDown,
  width: "12.73px",
  height: "7.8px",
};
