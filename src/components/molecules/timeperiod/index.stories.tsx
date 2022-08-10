import { ComponentStory, ComponentMeta } from "@storybook/react";
import Timeperiod from ".";

export default {
  title: "molecules/Timeperiod",
  component: Timeperiod,
} as ComponentMeta<typeof Timeperiod>;

const Template: ComponentStory<typeof Timeperiod> = () => <Timeperiod />;

export const Primary = Template.bind({});
