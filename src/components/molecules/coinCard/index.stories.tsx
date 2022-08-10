import { ComponentStory, ComponentMeta } from "@storybook/react";
import CoinCard from "./index";
import bitcoin from "../../../assets/images/bitcoin.png";
export default {
  title: "Molecules/CoinCard",
  component: CoinCard,
} as ComponentMeta<typeof CoinCard>;

const Template: ComponentStory<typeof CoinCard> = (args) => (
  <CoinCard {...args} />
);

export const Main = Template.bind({});
Main.args = {
  image: bitcoin,
  crypto: "Bitcoin",
  cost: "$3,406,069.54",
};
