import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import theme from "../../../theme/index";
import checkimg from "../../../assets/images/checktick.svg";
import { CHECKOUTSUCCESS } from "../../../utils/const";
interface CheckoutProps {
  cost: number;
  modeOfPayement: string;
}
const CheckoutSuccess = (props: CheckoutProps) => {
  const { cost, modeOfPayement } = props;
  return (
    <Grid
      container
      rowSpacing="20px"
      sx={{
        margin: 2,
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item rowSpacing="20px">
        <Grid
          item
          xs={40}
          zeroMinWidth
          rowSpacing="120px"
          sx={{
            width: 300,
            alignItems: "center",
            justifyContent: "center",
            margin: 2,
          }}
          display="flex"
        >
          <img src={checkimg} width="64px" height="64px" />
        </Grid>
        <Grid
          item
          xs={40}
          zeroMinWidth
          rowSpacing="20px"
          sx={{
            width: 300,
            alignItems: "center",
            justifyContent: "center",
            margin: 2,
          }}
          display="flex"
        >
          <Typography
            variant="h4"
            sx={{
              color: `${theme.palette.textColor.highEmphasis}`,
            }}
          >
            {cost} {CHECKOUTSUCCESS.CRYPTO}
          </Typography>
        </Grid>
        <Grid
          item
          xs={100}
          zeroMinWidth
          rowSpacing="20px"
          sx={{
            width: 300,
            alignItems: "center",
            justifyContent: "center",
            margin: 2,
          }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "22px",
              minWidth: "322px",
              height: "44px",
              color: `${theme.palette.textColor.highEmphasis}`,
            }}
            align="center"
          >
            {modeOfPayement == "BUY" ? "Purchase" : "Sell"}{" "}
            {CHECKOUTSUCCESS.DESCRIPTION}
          </Typography>
        </Grid>
        <Grid item xs={40} zeroMinWidth display="flex" marginTop="40px">
          <Grid container columnSpacing="16px" marginLeft="10px">
            <Grid item>
              <Button
                variant="outlined"
                sx={{
                  minWidth: "89px",
                  height: "42px",
                  padding: "0px 12px",
                  color: `${theme.palette.primary.primary500}`,
                }}
              >
                <Typography variant="button" sx={{ lineHeight: "42px" }}>
                  {modeOfPayement}
                  {CHECKOUTSUCCESS.CRYPTOBUTTON}
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                sx={{
                  minWidth: "151px",
                  minHeight: "42px",
                  padding: "0px 12px",
                  backgroundColor: `${theme.palette.primary.primary500}`,
                }}
              >
                {CHECKOUTSUCCESS.GOTOUSDCOIN}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CheckoutSuccess;
