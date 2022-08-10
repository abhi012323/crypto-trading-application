import { ComponentMeta,ComponentStory } from "@storybook/react";
import MyPortfolio from ".";
import {data} from "../../../utils/const";
export default{
    title:"Organisms/MyPortfolioGraph",
    component:MyPortfolio
}as ComponentMeta<typeof MyPortfolio>;

const Template:ComponentStory<typeof MyPortfolio>=(args)=><MyPortfolio {...args} />
const BitCoinArgs = {
    fillColor: "rgb(255, 246, 237,0.7)",
    borderColor: "#FFA74F",
    data: [
      [1, 2500],
      [2, 7000],
      [3, 9000],
      [4, 5500],
      [5, 6000],
    ],
    changePercent: -1.58,
  };

  const ETHArgs = {
    fillColor: "#d4e1fc",
    borderColor: "#0052FF",
    data: [
      [1, 2000],
      [2, 4000],
      [3, 60],
      [4, 2500],
      [5, 4500],
    ],
    changePercent: 1.00,
  };
  const legendData = ["Bitcoin", "Ethereum"];
export const Primary = Template.bind({})
Primary.args={
  legendData:legendData,
  changePercent:[2.00,-2.98],
  graph:{
    graphSource:data,
    borderColorGraph1:BitCoinArgs.borderColor,
    borderColorGraph2:ETHArgs.borderColor,
    fillColorGraph1:BitCoinArgs.fillColor,
    fillColorGraph2:ETHArgs.fillColor,
    multiGraph:true,
    showAxisLine:true,
    showTicks:true,
  }
}