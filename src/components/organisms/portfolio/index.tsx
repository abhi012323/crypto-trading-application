import { DataUsage } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import BarMenu from "../../../assets/icons/list.svg";
import React from "react";
import theme from "../../../theme/index";
interface PortfolioProps {
  children: React.ReactNode;
}
const Portfolio = (props: PortfolioProps) => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography fontWeight="bold" display={"inline-flex"}>My Portfolio</Typography>
      </Grid>
      <Grid
        item
        xs={6}
        sx={{
          display: "inline-flex",
          justifyContent: "flex-end",
          alignItems: "flex-start",
        }}
      >
        <DataUsage
          htmlColor={theme.palette.primary.primary500}
          sx={{ marginX: 1 }}
        />
        <img
          src={BarMenu}
          style={{ alignSelf: "center", height: "15px", width: "20px" }}
        />
      </Grid>
      <Grid item>
        <Grid container marginTop={1.2}>
          {React.Children.map(props.children, (child) => {
            return (
              <Grid item xs={12}>
                {child}
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
