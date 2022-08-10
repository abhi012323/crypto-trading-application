import React from "react";
import { Done } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import theme from "../../../theme/index";
import { transformCurrency } from "../../../utils/function";
export interface TransactionCardProps {
  type: string;
  name: string;
  cryptoValue: string;
  date?:string;
  dollarValue: string;
  symbol: string;
  id?:number;
}
const RecentTransactionCard = (props: TransactionCardProps) => {
  // console.log(props)
  return (
    <Grid container display="flex">
      <Grid item>
        <Box
          display="flex"
          marginX={"0.1rem"}
          bgcolor={"#E9F7EC"}
          justifyContent="center"
          sx={{ width: "3rem", height: "3rem", borderRadius: "50%" }}
        >
          <Done htmlColor="#20B03F" sx={{ margin: "auto" }} />
        </Box>
      </Grid>
      <Grid item flexGrow={1} marginX={"0.5rem"}>
        <Grid container display="flex">
          <Grid item flexDirection={"column"}>
            <Typography fontWeight={"bold"}>{props.name}</Typography>
            <Box
              bgcolor={theme.palette.grey[300]}
              textAlign="center"
              maxWidth="fit-content"
              maxHeight={"fit-content"}
              borderRadius="50px"
              marginY={1}
            >
              <Typography paddingX={1.2} fontSize="10px" textTransform={"capitalize"}>
                {props.type}
              </Typography>
            </Box>
          </Grid>
          <Grid
            display="flex"
            flexDirection={"column"}
            alignItems={"flex-end"}
            flexGrow={1}
            item
          >
            <Typography fontWeight={"bold"}>
              {props.type.toLowerCase().startsWith('s')
                ? `-${props.cryptoValue} ${props.symbol}`
                : `+${props.cryptoValue} ${props.symbol}`}
            </Typography>
            <Typography color={theme.palette.grey[600]}>
              {props.type.toLowerCase().startsWith('p')
                ? `-$${transformCurrency(props.dollarValue)}`
                : `+$${transformCurrency(props.dollarValue)}`}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RecentTransactionCard;
