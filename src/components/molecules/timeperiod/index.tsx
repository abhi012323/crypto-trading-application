import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import theme from "../../../theme";

const nameLabel = [
  { labelName: "1H", values: 0 },
  { labelName: "24H", values: 1 },
  { labelName: "1W", values: 2 },
  { labelName: "1M", values: 3 },
  { labelName: "1Y", values: 4 },
  { labelName: "ALL", values: 5 },
];

const tabStyle = {
  fontSize: 14,
  fontStyle: "normal",
  lineHeight: 1,
  display: "flex",
  letterSpacing: 1,
  color: `${theme.palette.textColor.mediumEmphasis}`,
  minWidth: 20,
};

const boxStyle = {
  minHeight: "64px",
  width: "100%",
  textOverflow: "ellipsis",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: "4px",
  border: "1px solid #E8E8F7",
};
const Timeperiod = () => {
  const [bool, setbool] = useState(false);
  const [value, setvalue] = useState(3);

  const handleChange = async (_event: React.SyntheticEvent, val: number) => {
    setvalue(val);
    setbool(!bool);
  };
  return (
    <>
      <Box sx={boxStyle}>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              backgroundColor: `${theme.palette.primary.primary500}`,
              width: 20,
              alignContent: "center",
              marginInline: 18,
            },
          }}
        >
          {nameLabel.map(({ labelName, values }) => (
            <Tab label={labelName} value={values} sx={tabStyle} />
          ))}
        </Tabs>
      </Box>
    </>
  );
};

export default Timeperiod;
