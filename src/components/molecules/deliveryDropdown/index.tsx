import { FormControl, Grid, MenuItem, Typography } from "@mui/material";
import React from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { LocalShippingOutlined, KeyboardArrowDown } from "@mui/icons-material";
import theme from "../../../theme/index";
interface DeliveryProps {
  instantTime: string;
  fee: string;
  title: string;
}

const deliveryTypes = [
  { type: "Instant : ", time: "2-5 minutes", fees: "0.001", values: 10 },
  { type: "Faster : ", time: "4 hours", fees: "0.001", values: 20 },
  { type: "Fast : ", time: "120 hours", fees: "0.001", values: 30 },
  { type: "None", time: "", values: 40 },
];

const DeliveryDropdown = (props: DeliveryProps) => {
  const { instantTime, fee, title } = props;
  const [delivery, setDelivery] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setDelivery(event.target.value);
  };
  return (
    <div>
      <Grid
        display="flex"
        sx={{
          height: "146px",
          width: "710px",
          justifyContent: "space-between",
          borderRadius: "4px",
          border: `1px solid #E8E8F7`,
          padding: "24px",
        }}
        direction="column"
      >
        <Grid item>
          <Typography
            variant="body1"
            sx={{
              color: `${theme.palette.textColor.highEmphasis}`,
            }}
          >
            {title}
          </Typography>
        </Grid>

        <FormControl
          sx={{
            width: 663,
            height: 54,
            radius: 4,
            justifyContent: "space-between",
          }}
        >
          <Select
            value={delivery}
            onChange={handleChange}
            displayEmpty
            sx={{ height: 40, padding: "32px 32px 32px 3px" }}
            inputProps={{ "aria-label": "Without label" }}
            IconComponent={KeyboardArrowDown}
          >
            <MenuItem value="" sx={{ height: 54 }}>
              <Typography data-testid="dropdown">
                <Grid container columnSpacing="8px">
                  <Grid item>
                    <LocalShippingOutlined
                      sx={{ width: 22, height: 26.01, marginTop: 1 }}
                    />
                  </Grid>
                  <Grid item>
                    <Grid item xs zeroMinWidth>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: 16,
                          color: `${theme.palette.textColor.highEmphasis}`,
                        }}
                      >
                        Instant : {instantTime} min
                      </Typography>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                      <Typography
                        sx={{
                          color: `${theme.palette.textColor.mediumEmphasis}`,
                          fontWeight: 600,
                          fontSize: 14,
                        }}
                        variant="caption1"
                      >
                        Transaction fees : {fee} BTC
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Typography>
            </MenuItem>
            {deliveryTypes.map(({ type, time, fees, values }) => (
              <MenuItem value={values} sx={{ height: 54 }}>
                <Grid
                  container
                  columnSpacing="330px"
                  justifyContent={"space-between"}
                >
                  <Grid item>
                    <Typography
                      sx={{
                        fontWeight: 500,
                        fontSize: 14,
                        color: `${theme.palette.textColor.highEmphasis}`,
                        marginLeft: 3,
                      }}
                    >
                      {type}
                      <b>{time}</b>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={{
                        color: `${theme.palette.textColor.mediumEmphasis}`,
                        fontWeight: 500,
                        fontSize: 12,
                        marginLeft: "24px",
                      }}
                      variant="caption2"
                    >
                      {type !== "None" ? `Delivery fees : ${fees} BTC` : ""}
                    </Typography>
                  </Grid>
                </Grid>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </div>
  );
};

export default DeliveryDropdown;
