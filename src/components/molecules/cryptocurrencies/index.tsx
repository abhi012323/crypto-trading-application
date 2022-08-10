import {
  ArrowBackIos,
  ArrowForwardIos,
  InfoOutlined,
} from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
const data = [
  {
    name: "Bitcoin",
    activeColor: "#F7931A",
    fillColor: "#fcd29f",
  },
  {
    name: "XRP",
    activeColor: "#222222",
    fillColor: "#c9c5c5",
  },
  {
    name: "Polkadot",
    activeColor: "#E6007A",
    fillColor: "#f7b0d6",
  },
  {
    name: "Ethereum",
    activeColor: "#627EEA",
    fillColor: "#afbefa",
  },
  {
    name: "Tether",
    activeColor: "#26A17B",
    fillColor: "#b6fce6",
  },
  {
    name: "Ethereum 2",
    activeColor: "#191971",
    fillColor: "#bfbff5",
  },
  {
    name: "Dodge Coin",
    activeColor: "#DBC984",
    fillColor: "#fff4c9",
  },
];
const CryptoCurrencies = () => {
  return (
    <Grid container width="100%" display="flex">
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent={"space-between"}
        marginY="1rem"
      >
        <Typography fontWeight={"bold"}> {"10 Coins (3 active)"} </Typography>
        <Box display="flex" alignItems="center">
          <InfoOutlined />
          <Typography marginX={"0.5rem"} display="inline-flex">
            {"Click on currency name below to display it on the graph"}
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        marginY={"0.5rem"}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <ArrowBackIos />
        {data.map((value) => {
          return (
            <Button
              sx={{
                color: "black",
                textTransform: "none",
                backgroundColor: value.fillColor,
                ":hover": {
                  backgroundColor: value.fillColor,
                },
              }}
            >
              {value.name}
            </Button>
          );
        })}
        <ArrowForwardIos />
      </Grid>
    </Grid>
  );
};

export default CryptoCurrencies;
