import { ComponentStory, ComponentMeta } from "@storybook/react";
import CryptoCurrency from ".";

export default {
  title: "organisms/CryptoCurrency",
  component: CryptoCurrency,
} as ComponentMeta<typeof CryptoCurrency>;

const Template: ComponentStory<typeof CryptoCurrency> = (args) => (
  <CryptoCurrency {...args} />
);

export const primary = Template.bind({});

primary.args = {
  cost: 0.023451,
  amount: "3,406,069.54",
  BuyAmount: "34,000",
  modeOfPayment: "SELL",
};
