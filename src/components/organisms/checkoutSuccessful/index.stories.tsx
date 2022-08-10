import { ComponentStory, ComponentMeta } from "@storybook/react";
import CheckoutSuccess from ".";

export default {
  title: "organisms/CheckoutSuccess",
  component: CheckoutSuccess,
} as ComponentMeta<typeof CheckoutSuccess>;

const Template: ComponentStory<typeof CheckoutSuccess> = (args) => (
  <CheckoutSuccess {...args} />
);

export const primary = Template.bind({});

primary.args = {
  cost: 0.023451,
  modeOfPayement: "BUY",
};
