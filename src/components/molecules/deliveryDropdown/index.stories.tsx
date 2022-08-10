import { ComponentStory, ComponentMeta } from "@storybook/react";
import DeliveryDropdown from ".";

export default {
  title: "molecules/DeliveryDropdown",
  component: DeliveryDropdown,
} as ComponentMeta<typeof DeliveryDropdown>;

const Template: ComponentStory<typeof DeliveryDropdown> = (args) => (
  <DeliveryDropdown {...args} />
);

export const primary = Template.bind({});

primary.args = {
  instantTime: "2-5",
  fee: "0.001",
  title: "Select speed delivery",
};
