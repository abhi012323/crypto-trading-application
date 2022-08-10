import { ArrowUpward } from "@mui/icons-material";
import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Graph, { GraphData } from "../graph";
import theme from "../../../theme";
import { transformCurrency } from "../../../utils/function";
export interface InlineGraphCardProps {
  name: string;
  value: string;
  icon: string;
  timePeriod: string;
  changePercent: number;
  data: GraphData[];
}
const InlineGraphCard = ({
  changePercent,
  data,
  icon,
  name,
  timePeriod,
  value,
}: InlineGraphCardProps) => {
  const borderColor =
    changePercent > 0
      ? theme.palette.gain.borderColor
      : theme.palette.loss.borderColor;
  const fillColor =
    changePercent > 0
      ? theme.palette.gain.fillColor
      : theme.palette.loss.fillColor;
  return (
    <Paper
      elevation={0}
      sx={{
        minWidth: "100%",
        padding: 1,
        maxWidth: "100%",
        border: 1,
        borderColor: theme.palette.greyColors.grey200,
      }}
    >
      <Grid container display="flex" flexWrap={"nowrap"}>
        <Grid width={"fit-content"} item paddingTop={1.5} paddingX="0.5rem">
          <img src={icon} style={{ width: 40, height: 40 }}></img>
        </Grid>
        <Grid item marginY={2}>
          <Typography
            display={"block"}
            variant={"subtitle2"}
            fontWeight={"bold"}
            marginBottom={1.2}
          >
            {name}
          </Typography>
          <Typography fontSize={16} marginY={3} fontWeight={"bold"}>
            {`$${transformCurrency(value)}`}
          </Typography>

          <Box
            bgcolor={theme.palette.grey[300]}
            maxWidth="fit-content"
            maxHeight={"fit-content"}
            borderRadius="50px"
            // marginY={4}
          >
            <Typography paddingX={1.2} fontSize="10px">
              {timePeriod}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs flexGrow={1} height="100%" flexShrink={1}>
          <Grid container flexDirection="column">
            <Grid
              item
              height="fit-content"
              display="flex"
              justifyContent={"end"}
              alignItems="flex-start"
              marginY={2}
            >
              <ArrowUpward
                htmlColor={borderColor}
                sx={{
                  width: "12px",
                  transform:
                    changePercent > 0 ? "rotate(30deg)" : "rotate(120deg)",
                  height: "12px",
                  display: "inline-flex",
                }}
              />
              <Typography
                color={borderColor}
                display="inline-flex"
                variant="overline"
              >
                {changePercent > 0
                  ? `+${changePercent.toFixed(2)}%`
                  : `${changePercent.toFixed(2)}%`}
              </Typography>
            </Grid>
            <Grid item>
              <Graph
                graphSource={data}
                borderColorGraph1={borderColor}
                fillColorGraph1={fillColor}
                showAxisLine={false}
                showTicks={false}
                multiGraph={false}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default InlineGraphCard;
