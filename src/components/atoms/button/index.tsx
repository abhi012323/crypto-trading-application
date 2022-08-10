import React from "react";
import { Button } from "@mui/material";
import theme from "../../../theme/index";
interface ButtonProps {
  text: string;
  type: "primary" | "secondary";
  width?: string;
  height?: string;
  buttonVariant?: "contained" | "outlined" | "text";
  onClick: () => void;
}
const PrimaryButton = (props: ButtonProps) => {
  let bgColor: string | undefined = "#FFFFFF";
  if (props.buttonVariant == "contained") {
    bgColor =
      props.type == "secondary"
        ? theme.palette.primary.warning300
        : theme.palette.primary.primary500;
  }
  return (
    <Button
      variant={props.buttonVariant}
      sx={{
        // color: theme.palette.structural.main,
        width: props.width || "8vw",
        textOverflow:'ellipsis',
        height: props.height || undefined,
        textTransform: "none",
        backgroundColor: bgColor,
        color:
          props.buttonVariant != "contained"
            ? theme.palette.primary.primary500
            : "white",
        whiteSpace: "nowrap",
        ":hover": {
          bgcolor: bgColor,
        },
      }}
      onClick={() => props.onClick()}
    >
      {props.text}
    </Button>
  );
};
export default PrimaryButton;
