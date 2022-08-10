import { Typography, Grid } from "@mui/material";
import theme from "../../../theme/index";
import CoinCard from "../../molecules/coinCard";

type selectingCrypto = {
  image: string;
  crypto: string;
  cost: string;
};
interface Props {
  title: string;
  cryptos: selectingCrypto[];
}
const SelectingCrypto = ({ title, cryptos }: Props) => {
  return (
    <>
      <Grid
        sx={{
          width: "100%",
          height: "100%",
          marginTop: "6px",
          borderRadius: "4px",
          padding: "24px",
          border: "1px solid #E8E8F7",
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: `${theme.palette.textColor.highEmphasis}` }}
        >
          {title}
        </Typography>
        <Grid container direction="row">
          {cryptos &&
            cryptos.map((crypto) => {
              return (
                <Grid
                  item
                  xs={3}
                  sx={{
                    marginTop: "16px",
                    border: `${
                      crypto.crypto === "Bitcoin" ? "2px solid #0052FF" : ""
                    }`,
                    borderRadius: "4px",
                  }}
                >
                  <CoinCard
                    image={crypto.image}
                    crypto={crypto.crypto}
                    cost={crypto.cost}
                  />
                </Grid>
              );
            })}
        </Grid>
      </Grid>
    </>
  );
};

export default SelectingCrypto;
