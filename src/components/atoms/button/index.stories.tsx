import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import PrimaryButton from ".";

export default {
  component: PrimaryButton,
  title: "Atoms/PrimaryButton",
  argTypes: {
    mode: {
      control: {
        type: "select",
        options: ["buy", "sell"],
      },
    },
    buttonVariant: {
      defaultValue: "contained",
    },
    onClick: { defaultValue: (value: string) => console.log(value) },
  },
} as ComponentMeta<typeof PrimaryButton>;

const Template: ComponentStory<typeof PrimaryButton> = (args) => (
  <PrimaryButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  text: "Buy",
  width:"470px",
  onClick: () => {
    console.log("clicked!!!");
  },
};
export const Sec= Template.bind({})
Sec.args={
  text:"Sell",
  type:"secondary"
}
export const needHelp = Template.bind({});
needHelp.args={
  text:"Need Help?",
  buttonVariant:"outlined",
  onClick:()=>{
    console.log("Need help button clicked!!")
  }
};

export const text = Template.bind({});
text.args={
  text:"Edit",
  buttonVariant:"text",
  onClick:()=>{
    console.log("Edit clicked!!")
  }
};