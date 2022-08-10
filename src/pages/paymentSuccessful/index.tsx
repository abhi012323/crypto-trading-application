import { Grid } from "@mui/material";
import React from "react";
import SideNav from "../../components/molecules/sideMenuBar";
import Header from "../../components/organisms/header";
import CheckoutSuccess from "../../components/organisms/checkoutSuccessful";
import Footer from "../../components/molecules/footer";
import avatar from "../../assets/images/avatar.png";
import chevronDown from "../../assets/icons/chevron-down.svg";
import { footerArray } from "../../utils/const";
interface PaymentSuccessfulProps {
  modeOfPayment: string;
  amount: number;
  headerTitle: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

const PaymentSuccessful = ({
  amount,
  primaryButtonText,
  secondaryButtonText,
  headerTitle,
  modeOfPayment,
}: PaymentSuccessfulProps) => {
  return (
    <Grid
      container
      height="95vh"
      sx={{ overflowY: "hidden" }}
      width="98vw"
      direction="row"
    >
      <Grid item height="95vh" xs={1}>
        <SideNav />
      </Grid>
      <Grid item xs>
        <Grid container height="100%" display="flex" flexDirection={"column"}>
          <Grid item width="100%">
            <Header
              title={headerTitle}
              button1text={primaryButtonText}
              button2text={secondaryButtonText}
              image={avatar}
              src={chevronDown}
              width="12.73px"
              height="7.8px"
            />
          </Grid>
          <Grid item display="flex" xs justifySelf={"center"}>
            <CheckoutSuccess cost={amount} modeOfPayement={modeOfPayment} />
          </Grid>
          <Grid
            item
            display="flex"
            height="fit-content"
            justifyItems={"flex-end"}
          >
            <Footer footerArray={footerArray} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PaymentSuccessful;
