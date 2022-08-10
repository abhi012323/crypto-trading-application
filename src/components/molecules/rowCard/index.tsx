import { Typography, Box } from "@mui/material";
import React from "react";
import theme from "../../../theme/index";

type RowCardProps = {
  image: any;
  crypto: string;
  currency: string;
  value: string;
  loss: number;
};

const RowCard: React.FC<RowCardProps> = (props) => {
  const { image, crypto, currency, value, loss } = props;
  return (
    <>
      <Box
        bgcolor={"transparent"}
        sx={{
          minHeight: "8px",
          width: "100%",
          textOverflow: "ellipsis",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          paddingY: 1.5,
          justifyContent: "space-between",
          boxShadow: "0px 0px 3px 0px #2C2C2C14",
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
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <Typography
              variant="body1"
              fontWeight="bold"
              sx={{
                color: `${theme.palette.textColor.highEmphasis}`,
              }}
            >
              {crypto}
            </Typography>
            <Typography
              variant="caption2"
              sx={{
                color: `${theme.palette.textColor.mediumEmphasis}`,
              }}
            >
              {currency}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            textOverflow: "ellipsis",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "flex-start",
          }}
        >
          <Typography
            variant="body1"
            fontWeight="bold"
            sx={{
              color: `${theme.palette.textColor.highEmphasis}`,
            }}
          >
            {value}
          </Typography>
          <Typography
            variant="caption2"
            sx={{
              color:
                loss > 0
                  ? `${theme.palette.gain.borderColor}`
                  : `${theme.palette.loss.borderColor}`,
            }}
          >
            {loss > 0 ? "+" : ""}
            {`${loss.toFixed(2)}%`}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default RowCard;
