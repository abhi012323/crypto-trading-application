import { Typography, Grid, Box } from "@mui/material";
import theme from "../../../theme/index";
import AmountDetailCard from "../../molecules/amountDetailCard";
import conversionImg from "../../../assets/images/conversion.png";
interface Props {
  title: string;
  amount: string;
  crypto: string;
  convertedAmount: string;
  conversion: string;
  text: string;
}
const ExchangingCurrency = ({
  title,
  amount,
  crypto,
  convertedAmount,
  conversion,
  text,
}: Props) => {
  return (
    <>
      <Grid
        container
        direction={"column"}
        sx={{
          width: "710px",
          minHeight: "318px",
          marginTop: "6px",
          borderRadius: "4px",
          padding: "24px",
          border: "1px solid #E8E8F7",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: `${theme.palette.textColor.highEmphasis}`,
            marginBottom: "12px",
          }}
        >
          {title}
        </Typography>
        <AmountDetailCard amount={amount} text={text} />
        <Box
          sx={{
            textOverflow: "ellipsis",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            marginLeft: "50px",
          }}
        >
          <img src={conversionImg} />
          <Box>
            <Typography
              variant="caption1"
              sx={{
                color: `${theme.palette.textColor.mediumEmphasis}`,
                marginLeft: "12px",
              }}
            >
              {conversion}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            height: "50px",
            width: "623px",
            textOverflow: "ellipsis",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "16px",
            justifyContent: "space-between",
            borderRadius: "4px",
            border: `1px solid #E8E8F7`,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              color: `${theme.palette.textColor.highEmphasis}`,
            }}
          >
            {convertedAmount}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: `${theme.palette.textColor.mediumEmphasis}`,
            }}
          >
            {crypto}
          </Typography>
        </Box>
      </Grid>
    </>
  );
};

export default ExchangingCurrency;
