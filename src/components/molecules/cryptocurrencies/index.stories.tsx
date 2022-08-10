import { ComponentStory,ComponentMeta } from "@storybook/react";
import CryptoCurrencies from ".";

export default{
    title:"Molecules/Crypto's",
    component:CryptoCurrencies
}as ComponentMeta<typeof CryptoCurrencies>

const Template:ComponentStory<typeof CryptoCurrencies>=(args)=><CryptoCurrencies />

export const Primary= Template.bind({})