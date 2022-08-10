import { Typography, Box } from "@mui/material";
import React from "react";
import theme from "../../../theme/index";

type CoinCardProps = {
  image: string;
  crypto: string;
  cost: string;
};

const CoinCard: React.FC<CoinCardProps> = (props) => {
  const { image, crypto, cost } = props;
  return (
    <>
      <Box
        sx={{
          height: "156px",
          maxWidth: "159px",
          textOverflow: "ellipsis",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          borderRadius: "4px",
        }}
      >
        <Box
          sx={{
            height: "56px",
            width: "56px",
            marginTop: "24px",
          }}
        >
          <img style={{ width: "100%", height: "100%" }} src={image} />
        </Box>
        <Box
          sx={{
            textOverflow: "ellipsis",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: `${theme.palette.greyColors.grey500}`,
              marginTop: "12px",
            }}
          >
            {crypto}
          </Typography>
          <Typography
            variant="caption1"
            sx={{
              color: `${theme.palette.textColor.mediumEmphasis}`,
              marginTop: "2px",
            }}
          >
            {cost}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default CoinCard;
