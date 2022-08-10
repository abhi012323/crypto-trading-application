import { ComponentMeta,ComponentStory } from "@storybook/react";
import RecentTransaction from ".";
export default{
    title:"Organisms/RecentTransaction",
    component:RecentTransaction
}as ComponentMeta<typeof RecentTransaction>;

const Template:ComponentStory<typeof RecentTransaction>=(args)=><RecentTransaction {...args}/>

export const Primary = Template.bind({})

Primary.args={
    dateList:["June 23", "June 23","June 14"],
    data:[{
        name:"BitCoin BTC",
        dollarValue:"34,000",
        cryptoValue:"0.0234",
        typePayment:"Purchased",
        symbol:"BTC"
    },{
        name:"Tether",
        dollarValue:"34,000",
        cryptoValue:"0.0234",
        typePayment:"Sold",
        symbol:"THR"
    },{
        name:"Ethereum",
        dollarValue:"34,000",
        cryptoValue:"0.0234",
        typePayment:"Sold",
        symbol:"ETH"
    }]
}