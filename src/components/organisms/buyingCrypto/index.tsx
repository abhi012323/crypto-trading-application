import { Grid, Typography } from "@mui/material";
import React from "react";
import dottedlines from "../../../assets/images/dottedlines.svg";
import vertical from "../../../assets/images/verticalline.svg";
import wallet from "../../../assets/images/wallet.svg";
import Bitcoin from "../../../assets/images/Bitcoin.svg";
import Purse from "../../../assets/images/Purse.svg";
import Dollar from "../../../assets/images/Dollar.svg";
import Truck from "../../../assets/images/Truck.svg";
import theme from "../../../theme/index";
import { BUYINGCRYPTO } from "../../../utils/const";
import PrimaryButton from "../../atoms/button";
import { API_URL } from "../../../utils/const";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { transformCurrency } from "../../../utils/function";
interface CryptoCurrencyProps {
  cost: number;
  amount: string;
  BuyAmount: string;
  modeOfPayment: string;
}
const CryptoCurrency = (props: CryptoCurrencyProps) => {
  const { cost, amount, BuyAmount, modeOfPayment } = props;
  let finalAmount = parseInt(BuyAmount.replace(",", "")) + 1000.0;
  const navigate = useNavigate();
  const handleClick = async () => {
    if (modeOfPayment !== `${BUYINGCRYPTO.BUY}`) {
      axios
        .post(API_URL + "transactions", {
          userID: 1,
          cryptoAmount: -0.0012245,
          dollarAmount: 1000,
          date: "Sun Jul 17 2022 13:21:59 GMT+0530 (India Standard Time)",
          cryptoID: 1,
          type: "sold",
        })
        .then((val) => {
          console.log(val);
          navigate("/sell/success");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .post(API_URL + "transactions", {
          userID: 1,
          cryptoAmount: +0.0012245,
          dollarAmount: -1000,
          date: new Date().toString(),
          cryptoID: 1,
          type: "purchased",
        })
        .then((val) => {
          console.log(val);
          navigate("/buy/success");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        borderRadius: "4px",
        color: "grey",
        border: "1px solid #E8E8F7",
        width: "527%",
        height: "100%",
      }}
    >
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: "4px",
          color: "grey",
          border: "1px solid #E8E8F7",
        }}
      >
        <Grid item xs zeroMinWidth marginTop="1.7rem">
          <Typography
            sx={{
              color: `${theme.palette.textColor.mediumEmphasis}`,
              fontWeight: 600,
            }}
          >
            {modeOfPayment === `${BUYINGCRYPTO.BUY}`
              ? `${BUYINGCRYPTO.BUYING}`
              : `${BUYINGCRYPTO.SELLING}`}
          </Typography>
        </Grid>
        <Grid item xs zeroMinWidth marginBottom="0.8rem" marginTop={"0.8rem"}>
          <Typography
            sx={{
              fontSize: 24,
              fontWeight: 500,
              color: `${theme.typography.h6}`,
            }}
          >
            {cost} {BUYINGCRYPTO.CRYPTOCURRENCY}
          </Typography>
        </Grid>
        <Grid item xs zeroMinWidth marginBottom="1.5rem">
          <Typography
            sx={{
              color: `${theme.palette.textColor.mediumEmphasis}`,
              fontWeight: 600,
            }}
          >
            1{BUYINGCRYPTO.CRYPTOCURRENCY} = ${amount}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        sx={{
          textOverflow: "ellipsis",
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          justifyContent: "space-between",
          borderRadius: "4px",
          color: "grey",
          border: "1px solid #E8E8F7",
        }}
      >
        <Grid item xs zeroMinWidth margin="1rem">
          <Grid container columnSpacing="1rem">
            <Grid item>
              {modeOfPayment === `${BUYINGCRYPTO.BUY}` ? (
                <img src={wallet} width="42" height="42" />
              ) : (
                <img src={Bitcoin} width="42" height="42" />
              )}
            </Grid>
            <Grid item>
              <Grid item xs zeroMinWidth>
                <Typography
                  sx={{ color: `${theme.palette.textColor.mediumEmphasis}` }}
                >
                  {modeOfPayment === `${BUYINGCRYPTO.BUY}`
                    ? `${BUYINGCRYPTO.PAYMENT}`
                    : `${BUYINGCRYPTO.PAYING}`}
                </Typography>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography
                  sx={{
                    color: `${theme.palette.textColor.highEmphasis}`,
                    fontWeight: 600,
                  }}
                >
                  {modeOfPayment === `${BUYINGCRYPTO.BUY}`
                    ? `${BUYINGCRYPTO.VISACARD}`
                    : `${BUYINGCRYPTO.WALLET}`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs zeroMinWidth marginLeft={"1rem"}>
            <img src={vertical} />
          </Grid>
          <Grid item xs zeroMinWidth>
            <Grid container columnSpacing="1rem">
              <Grid item>
                <img src={Truck} width="42" height="42" />
              </Grid>
              <Grid item>
                <Grid item xs zeroMinWidth>
                  <Typography
                    sx={{ color: `${theme.palette.textColor.mediumEmphasis}` }}
                  >
                    {BUYINGCRYPTO.DELIVERY}
                  </Typography>
                </Grid>
                <Grid item xs zeroMinWidth>
                  <Typography
                    sx={{
                      color: `${theme.palette.textColor.highEmphasis}`,
                      fontWeight: 600,
                    }}
                  >
                    {BUYINGCRYPTO.FEES}
                    {BUYINGCRYPTO.CRYPTOCURRENCY}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs zeroMinWidth marginLeft={"1rem"}>
            <img src={vertical} />
          </Grid>
          <Grid item xs zeroMinWidth>
            <Grid container columnSpacing="1rem">
              <Grid item>
                {modeOfPayment === `${BUYINGCRYPTO.BUY}` ? (
                  <img src={Purse} width="42" height="42" />
                ) : (
                  <img src={Dollar} width="42" height="42" />
                )}
              </Grid>
              <Grid item>
                <Grid item xs zeroMinWidth>
                  <Typography
                    sx={{ color: `${theme.palette.textColor.mediumEmphasis}` }}
                  >
                    {BUYINGCRYPTO.DEPOSIT}
                  </Typography>
                </Grid>
                <Grid item xs zeroMinWidth>
                  <Typography
                    sx={{
                      color: `${theme.palette.textColor.highEmphasis}`,
                      fontWeight: 600,
                    }}
                  >
                    {modeOfPayment === `${BUYINGCRYPTO.BUY}`
                      ? `${BUYINGCRYPTO.WALLET}`
                      : `${BUYINGCRYPTO.RUPEECOIN}`}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        sx={{
          textOverflow: "ellipsis",
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          color: "grey",
        }}
      >
        <Grid item zeroMinWidth>
          <Grid
            container
            marginX={"1rem"}
            marginY={"0.625rem"}
            marginTop="1rem"
          >
            <Grid item>
              <Typography
                sx={{
                  color: `${theme.palette.textColor.mediumEmphasis}`,
                  fontSize: 14,
                }}
              >
                {cost} {BUYINGCRYPTO.CRYPTOCURRENCY}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{}}>
                <img src={dottedlines} width="335" />
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  color: `${theme.palette.textColor.mediumEmphasis}`,
                  fontSize: 14,
                }}
              >
                ${BuyAmount}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs zeroMinWidth>
          <Grid container marginX={"1rem"} marginY={"0.625rem"}>
            <Grid item>
              <Typography
                sx={{
                  color: `${theme.palette.textColor.mediumEmphasis}`,
                  fontSize: 14,
                }}
              >
                {BUYINGCRYPTO.TRANSACTION}
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                <img src={dottedlines} width="360" />
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  color: `${theme.palette.textColor.mediumEmphasis}`,
                  fontSize: 14,
                }}
              >
                $1,000
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs zeroMinWidth marginX={"1rem"} marginY={"0.625rem"}>
          <Grid container>
            <Grid item>
              <Typography
                variant="body1"
                sx={{
                  color: `${theme.palette.textColor.highEmphasis}`,
                  fontWeight: 600,
                  fontSize: 18,
                }}
              >
                Total
              </Typography>
            </Grid>
            <Grid item>
              <img src={dottedlines} width="370" />
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                sx={{
                  color: `${theme.palette.textColor.highEmphasis}`,
                  fontWeight: 600,
                  fontSize: "18",
                }}
              >
                {`$ ${transformCurrency(finalAmount.toFixed(2))}`}
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs marginY={3} zeroMinWidth>
            <PrimaryButton
              buttonVariant="contained"
              type={
                modeOfPayment === `${BUYINGCRYPTO.BUY}`
                  ? "primary"
                  : "secondary"
              }
              width="100%"
              height="42px"
              text={`${modeOfPayment} ${BUYINGCRYPTO.NOW}`}
              onClick={handleClick}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CryptoCurrency;
