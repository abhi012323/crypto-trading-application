import { Typography, Grid } from "@mui/material";
import React from "react";
import theme from "../../../theme/index";
type CommonCardProps = {
  image: string;
  text: string;
  amount: string;
  title: string;
  balanceAmount?: string;
};

const CommonCard: React.FC<CommonCardProps> = (props) => {
  const { image, amount, text, title, balanceAmount } = props;
  return (
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
      <Grid
        direction="row"
        container
        sx={{
          height: "64px",
          minWidth: "662px",
          justifyContent: "space-between",
          borderRadius: "4px",
          border: `1px solid #E8E8F7`,
          padding: "16px",
          marginTop: "12px",
        }}
        display="flex"
      >
        <Grid
          direction="row"
          container
          display="flex"
          sx={{ justifyContent: "space-between" }}
        >
          <Grid
            item
            sx={{
              marginRight: "12px",
              alignItems: "center",
              display: "flex",
            }}
          >
            <img
              style={{ display: "inline-flex", height: "32px", width: "32px" }}
              src={image}
            />
            <Grid item>
              <Grid item sx={{ marginLeft: "5px" }}>
                {title === "Payment Method" ? (
                  <>
                    <Grid item xs zeroMinWidth>
                      <Typography
                        sx={{
                          color: `${theme.palette.textColor.highEmphasis}`,
                          fontWeight: 500,
                          fontSize: "14px",
                          padding: "3px",
                        }}
                      >
                        {text}
                      </Typography>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                      <Typography
                        sx={{
                          color: `${theme.palette.textColor.mediumEmphasis}`,
                          fontSize: "20px",
                          padding: "2px",
                        }}
                      >
                        Total Balance - ${balanceAmount}
                      </Typography>
                    </Grid>
                  </>
                ) : (
                  <>
                    <Typography
                      display={"inline-flex"}
                      variant="subtitle1"
                      sx={{
                        color: `${theme.palette.textColor.highEmphasis}`,
                        marginLeft: "12px",
                      }}
                    >
                      {text}
                    </Typography>
                  </>
                )}
              </Grid>
            </Grid>
          </Grid>

          <Grid item display="flex">
            <Typography
              variant="subtitle1"
              sx={{
                color: `${
                  title == "Total Balance"
                    ? theme.palette.textColor.highEmphasis
                    : theme.palette.textColor.mediumEmphasis
                }`,
              }}
            >
              {amount}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CommonCard;
