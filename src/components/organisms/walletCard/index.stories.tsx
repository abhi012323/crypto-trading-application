import { ComponentStory, ComponentMeta } from "@storybook/react";
import WalletCard from "./index";
import rupee from "../../../assets/images/rupee.png";
export default {
  title: "Organisms/WalletCard",
  component: WalletCard,
} as ComponentMeta<typeof WalletCard>;

const Template: ComponentStory<typeof WalletCard> = (args) => (
  <WalletCard {...args} />
);

export const Main = Template.bind({});
Main.args = {
  image: rupee,
  coin: "USD Coin",
  wallet: "US Dollar",
  amount: "$ 34,000.00",
  title: "My wallets",
};
