import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import InlineGraphCard, {
  InlineGraphCardProps,
} from "../../molecules/InlineGraphCard";
import { ArrowForwardIos } from "@mui/icons-material";
import Pencil from "../../../assets/icons/edit.svg";
import Menu from "../../../assets/icons/grid.svg";
import BarMenu from "../../../assets/icons/list.svg";
import theme from "../../../theme/index";
interface WatchlistProps {
  input: InlineGraphCardProps[];
}
const WatchList = (props: WatchlistProps) => {
  return (
    <>
      <Grid
        container
        width="100%"
        display="flex"
        alignItems={"center"}
        marginRight={4}
      >
        <Grid item xs alignItems="center" display="flex">
          <Typography
            fontWeight="bold"
            fontSize="20px"
            marginRight={2}
            display="inline-flex"
          >
            Watchlist
          </Typography>
          <Divider
            sx={{ color: "#000000" }}
            orientation="vertical"
            light={true}
            variant="middle"
          />
          <Button sx={{ textTransform: "none", display: "inline-flex" }}>
            <Typography
              fontWeight="bold"
              fontSize="14px"
              letterSpacing={0.35}
              color={theme.palette.primary.primary500}
            >
              Discover assets
            </Typography>
            <ArrowForwardIos
              sx={{
                fontSize: "12px",
                alignItems: "center",
                color: theme.palette.primary.primary500,
              }}
            />
          </Button>
        </Grid>
        <Grid
          item
          display="flex"
          xs
          marginRight={1}
          alignItems={"center"}
          justifyContent="flex-end"
        >
          <Button>
            <Typography
              color={theme.palette.primary.primary500}
              fontWeight="bold"
              variant="caption1"
              textTransform="uppercase"
              marginRight={0.5}
            >
              Edit
            </Typography>
            <img src={Pencil} />
          </Button>
          <Box marginX={1}>
            <img src={Menu} />
          </Box>
          <Box>
            <img src={BarMenu} />
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        width={"100%"}
        justifyContent="space-between"
        display="flex"
        columnGap={2}
      >
        {props.input.map((value) => {
          return (
            <Grid item xs={5.8} flexGrow={1} paddingY={1} paddingRight={3}>
              <InlineGraphCard
                name={value.name}
                value={value.value}
                timePeriod={value.timePeriod}
                data={value.data}
                icon={value.icon}
                changePercent={value.changePercent}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default WatchList;
