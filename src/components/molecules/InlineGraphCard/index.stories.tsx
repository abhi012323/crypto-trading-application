import { ComponentStory, ComponentMeta } from "@storybook/react";
import InlineGraphCard from ".";
import React from "react";
import { data } from "../../../utils/const";
import Eth from "../../../assets/icons/Eth.svg";
import { Box } from "@mui/material";
export default {
  title: "Molecules/InlineGraphCard",
  component: InlineGraphCard,
  argTypes: {
    icon: {
      control: "string",
    },
    name: {
      control: "string",
    },
    value: {
      control: "string",
    },
    timePeriod: {
      control: "string",
    },
    borderColor: {
      control: "color",
    },
    fillColor: {
      control: "color",
    },
  },
} as ComponentMeta<typeof InlineGraphCard>;
const Template: ComponentStory<typeof InlineGraphCard> = (args) => (
  <Box width="50vw" height="5vh">
    <InlineGraphCard {...args} />
  </Box>
);

export const Primary = Template.bind({});

Primary.args = {
  name: "Ethereum",
  value: "$24000",
  timePeriod: "24 h",
  icon: Eth,
  data: data,
  changePercent: -2.58,
};
