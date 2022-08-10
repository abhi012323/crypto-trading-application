import { ComponentStory, ComponentMeta } from "@storybook/react";
import SelectingCrypto from "./index";
import bitcoin from "../../../assets/images/bitcoin.png";
import ethereum from "../../../assets/images/ethereum.png";
import binance from "../../../assets/images/binance.png";
import tether from "../../../assets/images/tether.png";
import cardano from "../../../assets/images/cardano.png";
import xrp from "../../../assets/images/xrp.png";
import dagecoin from "../../../assets/images/dagecoin.png";
import polkadot from "../../../assets/images/polkadot.png";

export default {
  title: "Organisms/SelectingCrypto",
  component: SelectingCrypto,
} as ComponentMeta<typeof SelectingCrypto>;

const Template: ComponentStory<typeof SelectingCrypto> = (args) => (
  <SelectingCrypto {...args} />
);
export const Main = Template.bind({});
Main.args = {
  cryptos: [
    {
      image: bitcoin,
      crypto: "Bitcoin",
      cost: "$3,406,069.54",
    },
    {
      image: ethereum,
      crypto: "Ethereum",
      cost: "$240,048.03",
    },
    {
      image: binance,
      crypto: "Binance",
      cost: "$30,054.88",
    },
    {
      image: tether,
      crypto: "Tether",
      cost: "$74.214",
    },
    {
      image: cardano,
      crypto: "Cardano",
      cost: "$138.22",
    },
    {
      image: xrp,
      crypto: "xrp",
      cost: "$$76.73",
    },
    {
      image: dagecoin,
      crypto: "Dogecoin",
      cost: "$21.37",
    },
    {
      image: polkadot,
      crypto: "Polkadot",
      cost: "$1,642.39",
    },
  ],
  title: "Choose crypto",
};
