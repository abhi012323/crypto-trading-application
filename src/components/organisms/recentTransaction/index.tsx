import { Button, Grid, Typography } from "@mui/material";

import React from "react";
import theme from "../../../theme/index";
import RecentTransactionCard, {
  TransactionCardProps,
} from "../../molecules/recentTransactionCard";

interface TransactionProps {
  onClickViewAll: () => void;
  dateList: string[];
  data: TransactionCardProps[];
}
const RecentTransaction = (props: TransactionProps) => {
  
  return (
    <Grid container width="100%" overflow="auto">
      <Grid item xs={5}  display="block" >
        <Typography
          marginTop={"3px"}
          display="flex"
          alignItems="center"
          fontWeight="bold"
        >
          Recent transactions
        </Typography>
      </Grid>
      <Grid item display="flex" xs justifyContent={"flex-end"}>
        <Button
        onClick={props.onClickViewAll}
          sx={{
            textTransform: "none",
            display: "flex",
            color:theme.palette.primary.primary500,
            alignItems: "center",
            // justifySelf: "flex-end",
          }}
        >
          View All
        </Button>
      </Grid>
      {props.data.map((value,index) => 
      <>
      <Grid item display={"block"} margin={1} xs={12}>
        <Typography color={theme.palette.grey[600]}>{props.dateList[index]}</Typography>
      </Grid>
      <Grid item xs={12}>
        <RecentTransactionCard
          type={value.type}
          name={value.name}
          dollarValue={value.dollarValue}
          cryptoValue={value.cryptoValue}
          symbol={value.symbol}
          
        />
      </Grid></>)}
    </Grid>
  );
};

export default RecentTransaction;
