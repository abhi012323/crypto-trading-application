import { ComponentStory, ComponentMeta } from "@storybook/react";
import RowCard from "./index";
import ethereum from "../../../assets/images/ethereum.png";
export default {
  title: "Molecules/RowCard",
  component: RowCard,
} as ComponentMeta<typeof RowCard>;

const Template: ComponentStory<typeof RowCard> = (args) => (
  <RowCard {...args} />
);

export const Main = Template.bind({});
Main.args = {
  image: ethereum,
  crypto: "Ethereum",
  currency: "ETH",
  value: "$ 230,966.85",
  loss: "+6.85%",
};
