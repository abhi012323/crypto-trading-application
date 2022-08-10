import { Typography, Box } from "@mui/material";
import React from "react";
import theme from "../../../theme/index";
import Button from "../../atoms/button";
type AmountDetailCardProps = {
  amount: string;
  text: string;
};

const AmountDetailCard: React.FC<AmountDetailCardProps> = (props) => {
  const { amount, text } = props;
  return (
    <>
      <Box
        sx={{
          height: "50px",
          width: "623px",
          textOverflow: "ellipsis",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: "4px",
          border: `1px solid #E8E8F7`,
          padding: "16px",
        }}
      >
        <Box>
          <Typography
            variant="subtitle1"
            sx={{
              color: `${theme.palette.textColor.highEmphasis}`,
            }}
          >
            {amount}
          </Typography>
        </Box>
        <Box>
          <Button
            text={text}
            buttonVariant="outlined"
            type="primary"
            onClick={() => {
              console.log("button is clicked!!!");
            }}
            height="42px"
            width="90px"
          />
        </Box>
      </Box>
    </>
  );
};

export default AmountDetailCard;
