import { ComponentMeta, ComponentStory } from "@storybook/react";
import Graph from ".";
import { data } from "../../../utils/const";
import { Box } from "@mui/material";
export default {
  title: "Molecules/Graph",
  component: Graph,
} as ComponentMeta<typeof Graph>;

const Template: ComponentStory<typeof Graph> = (args) => (
  <Box width="100%" height="90vh">
    <Graph {...args} />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = {
  borderColorGraph1: "#46BF31",
  fillColorGraph1: "#E9F7EC",
  multiGraph: false,
  showAxisLine: false,
  showTicks: false,
  graphSource: data,
};
export const Secondary = Template.bind({});
Secondary.args = {
  borderColorGraph1: "#FFA74F",
  borderColorGraph2: "#0052FF",
  fillColorGraph1: "#FFF6ED",
  fillColorGraph2: "#d4e1fc",
  graphSource: data,
  multiGraph: true,
  showTicks: true,
  showAxisLine: true,
};
