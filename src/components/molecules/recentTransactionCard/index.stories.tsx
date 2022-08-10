import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import RecentTransactionCard from ".";

export default {
  title: "Molecules/RecentTransactionCard",
  component: RecentTransactionCard,
  argTypes:{
    typePayment:{
      control:{
        type: "select",
        options: ["Sold","Purchased"]
      }
    },
    cryptoValue:{
      control:"text"
    },
    dollarValue:{
      control:"text"
    }
  }
} as ComponentMeta<typeof RecentTransactionCard>;

const Template: ComponentStory<typeof RecentTransactionCard> = (args) => (
  <RecentTransactionCard {...args} />
);

export const Primary = Template.bind({});

Primary.args={
  typePayment:"Purchased",
  name:"Bitcoin BTC",
  cryptoValue:"0.0234510",
  dollarValue:"34,000.00",
  symbol:"BTC"
}
    
