import { ComponentStory, ComponentMeta } from "@storybook/react";
import AmountDetailCard from "./index";
export default {
  title: "Molecules/AmountDetailCard",
  component: AmountDetailCard,
} as ComponentMeta<typeof AmountDetailCard>;

const Template: ComponentStory<typeof AmountDetailCard> = (args) => (
  <AmountDetailCard {...args} />
);

export const Main = Template.bind({});
Main.args = {
  amount: "$34,000.00",
  text: "Buy max",
};
