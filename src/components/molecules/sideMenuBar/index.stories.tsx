import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import SideMenuBar from "./index";
export default {
  title: "Molecules/SideMenuBar",
  component: SideMenuBar,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/mucf2sK9xyoLkT82DV2cFG/Minet?node-id=522%3A4910",
    },
  },
} as ComponentMeta<typeof SideMenuBar>;

const Template: ComponentStory<typeof SideMenuBar> = (args) => <SideMenuBar />;

export const SidemenuBar = Template.bind({});
