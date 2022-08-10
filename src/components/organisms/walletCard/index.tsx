import { Typography, Box } from "@mui/material";
import React from "react";
import theme from "../../../theme/index";

type WalletCardProps = {
  image: string;
  coin: string;
  wallet: string;
  amount: string;
  title: string;
};

const WalletCard: React.FC<WalletCardProps> = (props) => {
  const { image, coin, wallet, amount, title } = props;
  return (
    <>
      <Box
        sx={{
          minHeight: "40px",
          width: "100%",
          textOverflow: "ellipsis",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box>
          <Typography
            variant="subtitle1"
            sx={{
              color: `${theme.palette.textColor.highEmphasis}`,
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box
          sx={{
            minHeight: "58px",
            width: "inherit",
            textOverflow: "ellipsis",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              textOverflow: "ellipsis",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box
              sx={{
                height: "42px",
                width: "42px",
                marginRight: "10px",
              }}
            >
              <img style={{ width: "100%", height: "100%" }} src={image} />
            </Box>
            <Box
              sx={{
                textOverflow: "ellipsis",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="body1"
                fontWeight="bold"
                sx={{
                  color: `${theme.palette.textColor.highEmphasis}`,
                }}
              >
                {coin}
              </Typography>
              <Typography
                variant="caption2"
                sx={{
                  color: `${theme.palette.textColor.mediumEmphasis}`,
                }}
              >
                {wallet}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              fontWeight="bold"
              variant="body1"
              sx={{
                color: `${theme.palette.textColor.highEmphasis}`,
              }}
            >
              {amount}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default WalletCard;
