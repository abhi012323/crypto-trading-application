import React from "react";
import SideNav from "../../components/molecules/sideMenuBar";
import WatchList from "../../components/organisms/watchlist";
import theme from "../../theme/index";
import rupee from "../../assets/images/rupee.png";
import avatar from "../../assets/images/avatar.png";
import chevronDown from "../../assets/icons/chevron-down.svg";
import { Divider, Grid, Typography, Box } from "@mui/material";
import Portfolio from "../../components/organisms/portfolio";
import RowCard from "../../components/molecules/rowCard";
import WalletCard from "../../components/organisms/walletCard";
import Header from "../../components/organisms/header";
import RecentTransaction from "../../components/organisms/recentTransaction";
import MyPortfolio from "../../components/organisms/myPortfolio";
import CryptoCurrencies from "../../components/molecules/cryptocurrencies";
import Footer from "../../components/molecules/footer";
import {
  useCurrency,
  useMyPortfolio,
  usePortfolio,
  useTransactions,
} from "./hooks";
import { transformCurrency } from "../../utils/function";

const Dashboard = () => {
  const { transactions, date } = useTransactions();
  const { portfolio, sum } = usePortfolio();
  const result = useCurrency();
  const { graph, changePercent } = useMyPortfolio();
  
  return (
    <Grid container bgcolor="#FAFCFF" sx={{ overflow: "hidden" }}>
      <Grid item width="fit-content">
        <SideNav />
      </Grid>
      <Grid item xs>
        <Grid container direction="column">
          <Grid item height="fit-content">
            <Header
              title="Dashboard"
              button1text="SELL"
              button2text="BUY"
              image={avatar}
              src={chevronDown}
              width="12.73px"
              height="7.8px"
            />
          </Grid>
          <Grid item xs>
            <Grid container>
              <Grid item xs={8}>
                <Grid container>
                  <Grid item marginLeft={2} marginTop={1}>
                    <WatchList input={result} />
                  </Grid>
                  <Grid item marginLeft={2} marginY="1rem">
                    <MyPortfolio
                      legendData={["Bitcoin", "Total Investment Value"]}
                      changePercent={changePercent ?? [0, 0]}
                      graph={{
                        graphSource: graph,
                        borderColorGraph1: "#FFA74F",
                        borderColorGraph2: "#0052FF",
                        fillColorGraph2: "#d4e1fc",
                        fillColorGraph1: "rgb(255, 246, 237,0.7)",
                        multiGraph: true,
                        showAxisLine: true,
                        showTicks: true,
                      }}
                    />
                    <CryptoCurrencies />
                  </Grid>
                </Grid>
                {/* </Grid> */}
              </Grid>
              <Grid
                item
                bgcolor="white"
                flexWrap="nowrap"
                xs
                marginLeft={3}
                paddingX={3}
              >
                <Grid container direction="column">
                  <Grid item width="inherit" marginY={1}>
                    <Portfolio>
                      {portfolio.map((value) => (
                        <RowCard
                          image={value.image}
                          crypto={value.name}
                          currency={value.symbol}
                          value={`$ ${transformCurrency(value.value.toFixed(2))}`}
                          loss={value.changePercent}
                        />
                      ))}
                    </Portfolio>
                  </Grid>
                  <Grid item marginY={1}>
                    <Divider />
                    <Box
                      marginY={2}
                      display="flex"
                      justifyContent="space-between"
                    >
                      <Typography color={theme.palette.grey[600]}>
                        Total Balance
                      </Typography>
                      <Typography fontWeight="bold">{`$ ${transformCurrency(
                        sum.toFixed(2)
                      )}`}</Typography>
                    </Box>
                    <Divider />
                  </Grid>
                  <Grid item marginY={2}>
                    <WalletCard
                      image={rupee}
                      coin="USD Coin"
                      wallet="US Dollar"
                      amount="$ 34,000.00"
                      title="My wallets"
                    />
                  </Grid>
                  <Grid item>
                    <RecentTransaction
                      onClickViewAll={() => console.log("clicked viewAll")}
                      dateList={date}
                      data={transactions}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          bgcolor="white"
          display="flex"
          alignItems="end"
          height="10vh"
          marginTop={5}
          xs={12}
        >
          <Footer
            footerArray={[
              "Dashboard",
              "Careers",
              "Legal & Privacy",
              "© 2021 Minet",
            ]}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
