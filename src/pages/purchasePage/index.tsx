import Header from "../../components/organisms/header";
import { Grid, Typography } from "@mui/material";
import theme from "../../theme/index";
import SideMenuBar from "../../components/molecules/sideMenuBar";
import avatar from "../../assets/images/avatar.png";
import chevronDown from "../../assets/icons/chevron-down.svg";
import rupee from "../../assets/images/rupee.png";
import SelectingCrypto from "../../components/organisms/selectingCrypto";
import ExchangingCurrency from "../../components/organisms/exchangeCurrency";
import CommonCard from "../../components/molecules/commonCard";
import BuyingCrypto from "../../components/organisms/buyingCrypto";
import Footer from "../../components/molecules/footer";
import DeliveryDropdown from "../../components/molecules/deliveryDropdown";
import { useCurrency } from "../sellPage/hook";

const PurchasePage = () => {
  let currency = useCurrency();
  return (
    <Grid
      container
      data-testid="purchasepage-id"
      sx={{
        flexDirection: "column",
        height: "1398px",
        width: "fit-content",
        overflowX: "hidden",
      }}
    >
      <Grid width="92vw" item sx={{ position: "absolute", left: "100px" }}>
        <Header
          title="Checkout"
          button1text={"SELL"}
          button2text={"BUY"}
          image={avatar}
          src={chevronDown}
          width={"12.73px"}
          height={"7.8px"}
        />
      </Grid>
      <Grid container>
        <Grid item>
          <SideMenuBar />
        </Grid>
        <Grid display="flex">
          <Grid item sx={{ marginRight: "24px" }}>
            <Grid item sx={{ marginTop: "84px", marginLeft: "24px" }}>
              <Typography
                variant="subtitle1"
                sx={{
                  color: `${theme.palette.textColor.highEmphasis}`,
                  marginTop: "24px",
                }}
              >
                Buy Crypto
              </Typography>
              <SelectingCrypto title={"Choose crypto"} cryptos={currency} />
            </Grid>
            <Grid item sx={{ marginTop: "24px", marginLeft: "24px" }}>
              <CommonCard
                image={rupee}
                text={"USD Coin (Cash)"}
                amount={"Default"}
                title={"Payment Method"}
                balanceAmount={"34,000"}
              />
            </Grid>
          </Grid>
          <Grid display="flex" sx={{ marginTop: "83px" }}>
            <BuyingCrypto
              cost={0.023451}
              amount={"3,406,069.54"}
              BuyAmount={"34,000.00"}
              modeOfPayment="BUY"
            />
          </Grid>
        </Grid>
        <Grid item sx={{ marginLeft: "104px" }}>
          <ExchangingCurrency
            title="Amount details"
            amount={"0.0234510 "}
            crypto={"USD coin (cash)"}
            convertedAmount={"$34,000.00"}
            text={"Buy max"}
            conversion={"1BTC = $3,406,069.54"}
          />
        </Grid>
        <Grid item sx={{ marginLeft: "104px", marginTop: "24px" }}>
          <DeliveryDropdown
            instantTime="2-5"
            fee="0.001"
            title="Select speed delivery"
          />
        </Grid>
        <Grid container item sx={{ marginLeft: "106px", marginTop: "84px" }}>
          <Footer
            footerArray={[
              "Dashboard",
              "Careers",
              "Legal & Privacy",
              "© 2021 Minet",
            ]}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PurchasePage;
