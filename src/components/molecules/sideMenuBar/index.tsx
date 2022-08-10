import { Box, Grid } from "@mui/material";
import React from "react";
import theme from "../../../theme/index";
import logo from "../../../assets/icons/logo.svg";
import dashboard from "../../../assets/icons/dashboard.svg";
import portfolio from "../../../assets/icons/portfolio.svg";
import trade from "../../../assets/icons/trade.svg";
import notification from "../../../assets/icons/notification.svg";
import logout from "../../../assets/icons/logout.svg";
import { useNavigate } from "react-router-dom";
const nameIcon = [
  { icon: logo },
  { icon: dashboard },
  { icon: portfolio },
  { icon: trade },
  { icon: notification },
  { icon: logout },
];

const SideNav = () => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      bgcolor="white"
      sx={{
        width: "80px",
        height: "100%",
        // backgroundColor: `${theme.palette.structural.white}`,
      }}
      direction="column"
      alignItems={"center"}
    >
      {nameIcon.map(({ icon }) => {
        return (
          <Grid
            item
            sx={{
              marginTop: `${icon === logo ? "30px" : "50px"}`,
              backgroundColor: `${theme.palette.structural.color1}`,
            }}
          >
            <Box
              sx={{
                width: `${icon === logo ? "32px" : "20px"}`,
                height: `${icon === logo ? "32px" : "20px"}`,
              }}
            >
              <img
                width="100%"
                height="100%"
                onClick={() => {
                  icon === logo ? navigate("/") : navigate("");
                }}
                src={icon}
                alt=""
              />
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default SideNav;
