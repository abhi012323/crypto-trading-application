import { ComponentMeta, ComponentStory } from "@storybook/react";
import Logo from ".";
import logo from "../../../assets/icons/logo.svg";

export default {
  title: "atoms/Logo",
  Component: Logo,
  argTypes: {
    src: {
      control: "text",
      description: "The source of the icon",
      defaultValue: logo,
    },
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const primary = Template.bind({});

primary.args = {
  src: logo,
  width: "18.64px",
  height: "15.93px",
};
