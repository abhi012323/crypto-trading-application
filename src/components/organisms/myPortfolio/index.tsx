import React from "react";
import Graph, { GraphProps } from "../../molecules/graph";
import Console from "../../../assets/icons/console.svg";
import GraphIcon from "../../../assets/icons/graph.svg";
import { Box, Grid, Typography } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";
import Timeperiod from "../../molecules/timeperiod/index";
import theme from "../../../theme";
import { transformCurrency } from "../../../utils/function";
import { useSum } from "./hook";

interface MyPortfolioProps {
  graph: GraphProps;
  legendData: string[];
  changePercent: number[];
}
const MyPortfolio = ({
  graph,
  changePercent,
  legendData,
}: MyPortfolioProps) => {
  const sum = useSum(graph.graphSource);
  return (
    <Grid container height="90%" display="flex">
      <Grid item xs={12}>
        <Box
          marginBottom="10px"
          display="flex"
          justifyContent={"space-between"}
          marginRight={0.5}
        >
          <Typography fontWeight="bold" variant="h6">
            My Portfolio value
          </Typography>
          <Box>
            <img style={{ marginRight: "1rem" }} src={Console} />
            <img src={GraphIcon} />
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        padding={3}
        bgcolor="white"
        height="inherit"
        border={1}
        borderColor={theme.palette.grey[300]}
      >
        <Grid container height="inherit">
          <Grid item xs={12} display="flex" justifyContent="space-between">
            <Grid container width="100%">
              <Grid bgcolor="white" item xs={4} marginY={2}>
                <Typography
                  color={theme.palette.textColor.mediumEmphasis}
                  display="inline-flex"
                  marginX={1}
                >
                  {legendData[1]}
                </Typography>
                <ArrowUpward
                  htmlColor={changePercent[1] > 0 ? "green" : "red"}
                  sx={{
                    display: "inline-flex",
                    alignSelf: "center",
                    marginLeft: 0.5,
                    height: "12px",
                    width: "15px",
                    transform:
                      changePercent[1] > 0 ? "rotate(30deg)" : "rotate(120deg)",
                  }}
                />
                <Typography
                  color={changePercent[1] > 0 ? "green" : "red"}
                  marginBottom={1}
                  display="inline-flex"
                  fontSize={"12px"}
                >
                  {changePercent[1] > 0 ? "+" : ""}
                  {changePercent[1].toPrecision(3) + "%"}
                </Typography>

                <Typography marginX={1}>{`$ ${transformCurrency(
                  sum[1]
                )}`}</Typography>
              </Grid>
              <Grid item xs={3} marginY={2}>
                <Typography
                  color={theme.palette.textColor.mediumEmphasis}
                  display="inline-flex"
                  marginX={1}
                >
                  {legendData[0]}
                </Typography>
                <ArrowUpward
                  htmlColor={changePercent[0] > 0 ? "green" : "red"}
                  sx={{
                    display: "inline-flex",
                    alignSelf: "center",
                    marginLeft: 0.5,
                    height: "12px",
                    width: "15px",
                    transform:
                      changePercent[0] > 0 ? "rotate(30deg)" : "rotate(120deg)",
                  }}
                />
                <Typography
                  color={changePercent[0] > 0 ? "green" : "red"}
                  marginBottom={1}
                  display="inline-flex"
                  fontSize={"12px"}
                >
                  {changePercent[0] > 0 ? "+" : ""}
                  {changePercent[0].toPrecision(3) + "%"}
                </Typography>
                <Typography marginX={1}>{`$ ${transformCurrency(
                  sum[0]
                )}`}</Typography>
              </Grid>
              <Grid item xs={5} marginY={2} justifySelf="flex-end">
                <Timeperiod />
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            display="flex"
            xs={12}
            marginTop={2}
            height="fit-content"
            alignItems="center"
            justifyContent={"flex-end"}
          >
            <Box
              display="inline-flex"
              height="8px"
              width="8px"
              borderRadius={"50%"}
              marginX={1}
              bgcolor={graph.borderColorGraph1}
            ></Box>{" "}
            <Typography fontSize="12px" display="inline-flex">
              {legendData[0]}
            </Typography>
            <Box
              marginX={1}
              display="inline-flex"
              height="8px"
              width="8px"
              borderRadius={"50%"}
              bgcolor={graph.borderColorGraph2}
            ></Box>{" "}
            <Typography fontSize="12px" display="inline-flex">
              {legendData[1]}
            </Typography>
          </Grid>
          <Grid marginTop={"5%"} item xs={12} height="80%">
            <Graph {...graph} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MyPortfolio;
