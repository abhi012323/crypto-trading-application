import { Button, FormControl, Grid, MenuItem, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";
import { KeyboardArrowDown } from "@mui/icons-material";
import theme from "../../../theme/index";
import { FOOTER } from "../../../utils/const";

const contentStyle = {
  height: 2,
  fontWeight: 400,
  fontSize: 16,
  letterSpacing: 0.16,
};
const menuItemStyle = {
  fontSize: 16,
  fontWeight: 400,
  color: `${theme.palette.textColor.highEmphasis}`,
};
const buttonStyle = {
  height: 40,
  px: 1.5,
  py: 1.5,
  fontSize: "14px",
  fontHeight: "42px",
  fontWeight: 500,
  color: `${theme.palette.primary.primary500}`,
  marginInline: 2,
  padding: "0px 16px 0px 16px",
};
interface FooterProps {
  footerArray: string[];
}
const Footer: React.FC<FooterProps> = ({ footerArray }) => {
  const [language, setLanguage] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };
  return (
    <Grid container justifyContent={"space-between"} marginRight="70px">
      <Grid container item justifyContent={"space-between"} width="400px">
        {footerArray.map((item) => {
          return (
            <Grid item>
              <Typography
                sx={[
                  contentStyle,
                  {
                    lineHeight: "40px",
                    color: `${item === "© 2021 Minet" ? "#343446" : "#0052FF"}`,
                  },
                ]}
              >
                {item}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
      <Grid item>
        <FormControl sx={{ minWidth: 170 }}>
          <Select
            value={language}
            onChange={handleChange}
            displayEmpty
            sx={{ height: 40 }}
            inputProps={{ "aria-label": "Without label" }}
            IconComponent={KeyboardArrowDown}
          >
            <MenuItem value="" data-testid="menuitem-need">
              <Typography variant="body2" sx={menuItemStyle}>
                {FOOTER.DROPTEXT}
              </Typography>
            </MenuItem>
          </Select>
        </FormControl>

        <Button size="medium" sx={buttonStyle} variant="outlined">
          {FOOTER.BUTTONTEXT}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Footer;
