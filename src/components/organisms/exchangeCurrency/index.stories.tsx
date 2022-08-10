import { ComponentStory, ComponentMeta } from "@storybook/react";
import ExchangingCurrency from "./index";

export default {
  title: "Organisms/ExchangingCurrency",
  component: ExchangingCurrency,
} as ComponentMeta<typeof ExchangingCurrency>;

const Template: ComponentStory<typeof ExchangingCurrency> = (args) => (
  <ExchangingCurrency {...args} />
);
export const Main = Template.bind({});
Main.args = {
  title: "Amount details",
  amount: "$34,000.00",
  text: "Buy max",
  crypto: "BTC",
  convertedAmount: "0.0234510 ",
  conversion: "1BTC = $3,406,069.54",
};
