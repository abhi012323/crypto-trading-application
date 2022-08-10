import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Portfolio from ".";
import BooksReadCard from "../../molecules/rowCard";
import ETH from "../../../assets/images/ethereum.png";
import BTC from "../../../assets/images/bitcoin.png";
import Tether from "../../../assets/images/tether.png";
import { Box } from "@mui/material";
export default {
  title: "organisms/MyPortfolio",
  component: Portfolio,
} as ComponentMeta<typeof Portfolio>;
const Template: ComponentStory<typeof Portfolio> = (args) => (
  <Box width="400px">
    <Portfolio {...args} />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <>
      <BooksReadCard
        image={BTC}
        crypto="Bitcoin"
        currency="BTC"
        value="$ 230,966.85"
        loss="+6.85%"
      />
      <BooksReadCard
        image={ETH}
        crypto="Ethereum"
        currency="ETH"
        value="$ 230,966.85"
        loss="+6.85%"
      />
      <BooksReadCard
        image={Tether}
        crypto="Tether"
        currency="Tether"
        value="$ 230,966.85"
        loss="-6.85%"
      />
    </>
  ),
};

//  <Grid item xs={12}>
//         <BooksReadCard
//           image={ETH}
//           crypto="Ethereum"
//           currency="ETH"
//           value="$ 230,966.85"
//           loss="+6.85%"
//         />
//       </Grid>
//       <Grid item xs={12}>
// <BooksReadCard
//   image={BTC}
//   crypto="Bitcoin"
//   currency="BTC"
//   value="$ 230,966.85"
//   loss="+6.85%"
// />
//       </Grid>
//       <Grid item xs={12}>
//         <BooksReadCard
//           image={Tether}
//           crypto="Tether"
//           currency="Tether"
//           value="$ 230,966.85"
//           loss="-6.85%"
//         />
//         </Grid>
