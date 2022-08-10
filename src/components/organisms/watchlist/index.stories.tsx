import { Box } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import WatchList from ".";
import { data } from "../../../utils/const";
import ETH from "../../../assets/icons/Eth.svg";

export default {
  title: "organisms/watchlist",
  component: WatchList,
} as ComponentMeta<typeof WatchList>;
const Template: ComponentStory<typeof WatchList> = (args) => (
  <Box width="750px">
    <WatchList {...args} />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = {
  input: [
    {
      name: "Ethereum",
      value: "$24000",
      timePeriod: "24 h",
      icon: ETH,
      data: data,
      changePercent: -1.0,
    },
    {
      name: "Ethereum",
      value: "$24000",
      timePeriod: "24 h",
      icon: ETH,
      data: data,
      changePercent: -2.5,
    },
    {
      name: "Ethereum",
      value: "$24000",
      timePeriod: "24 h",
      icon: ETH,
      data: data,
      changePercent: 2.0,
    },
    {
      name: "Ethereum",
      value: "$24000",
      timePeriod: "24 h",
      icon: ETH,
      data: data,
      changePercent: -5.08,
    },
  ],
};
