import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/const";
import { TransactionCardProps } from "../../components/molecules/recentTransactionCard";
import { GraphData } from "../../components/molecules/graph";
import { InlineGraphCardProps } from "../../components/molecules/InlineGraphCard";

interface TransactionProps {
  cryptoAmount: number;
  name: string;
  symbol: string;
  date: Date;
  dollarAmount: number;
  id: number;
  type: string;
}

interface CurrencyProps {
  id: number;
  icon: string;
  name: string;
  currentValue: string;
  symbol: string;
  trend: GraphData[];
}
interface GraphProps {
  crypto: string;
  id: string;
  data: { timePeriod: string; value: number }[];
}
export const useMyWallet = () => {
  let [wallet, setWallet] = useState<number>(0);
  let [source, setSource] = useState<number>(0);
  axios.get(API_URL + "user").then((value) => {
    setSource(value.data.availableBalance);
  });
  useEffect(() => {
    setWallet(source);
  }, [source]);
  return wallet;
};
export const useCurrency = () => {
  let [currency, setCurrency] = useState<CurrencyProps[]>([]);
  useEffect(() => {
    axios
      .get(API_URL + "cryptocurrencies")
      .then((value) => {
        setCurrency(value.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  let [result, setResult] = useState<InlineGraphCardProps[]>([]);
  useEffect(() => {
    if (currency.length > 0) {
      for (let i = 0; i < 4; i++) {
        const changePercent =
          (currency[i].trend[currency[i].trend.length - 1].value /
            currency[i].trend[0].value -
            1) *
          100;
        setResult((prev) => [
          ...prev,
          {
            changePercent: changePercent,
            data: currency[i].trend,
            icon: currency[i].icon,
            name: currency[i].name,
            value: currency[i].currentValue,
            timePeriod: "24h",
          },
        ]);
      }
    }
  }, [currency]);
  return result;
};
type UserPortfolioGraph = {
  timePeriod: string;
  value: number;
};
export const useMyPortfolio = () => {
  let [user, setUser] = useState<UserPortfolioGraph[]>([]);
  let [graph, setGraph] = useState<GraphData[]>([]);
  let [changePercent, setChangePercent] = useState<number[]>([0, 0]);
  useEffect(() => {
    axios.get(API_URL + "user?userID=1").then((value) => {
      setUser(value.data.trend);
    });
  }, []);

  useEffect(() => {
    axios.get(API_URL + "cryptocurrencies/1").then((value) => {
      if (Object.keys(user).length > 0) {
        for (let i of Object.keys(user)) {
          setGraph((prev) => [
            ...prev,
            {
              timePeriod: user[parseInt(i)].timePeriod,
              value2: user[parseInt(i)].value,
              value: value.data.trend[parseInt(i)].value,
            },
          ]);
        }
      }
    });
  }, [user]);
  useEffect(() => {
    if (graph.length > 0)
      setChangePercent([
        (graph[graph.length - 1].value / graph[0].value - 1) * 100,
        (graph[graph.length - 1].value2! / graph[0].value2! - 1) * 100,
      ]);
  }, [graph]);
  return { graph, changePercent };
};
export const useTransactions = () => {
  let [source, setSource] = useState<TransactionProps[]>([]);
  let [transactions, setTransaction] = useState<TransactionCardProps[]>([]);
  let [date, setDate] = useState<string[]>([]);
  useEffect(() => {
    axios({
      method: "get",
      withCredentials: true,
      url: `${API_URL}transactions?userID=${1}`,
    })
      .then((value) => {
        setSource(value.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    source.map((value) => {
      setTransaction((prev) => [
        ...prev,
        {
          type: value.type,
          name: value.name,
          cryptoValue: `${value.cryptoAmount}`,
          date: `'`,
          dollarValue: `${value.dollarAmount}`,
          symbol: value.symbol,
        },
      ]);
      const temp = new Date(value.date.toString());
      setDate((prev) => [
        ...prev,
        `${temp.toLocaleString("en-us", {
          month: "long",
        })} ${temp.getDate()}`,
      ]);
    });
  }, [source]);
  return { transactions, date };
};
type UserPortfolio = {
  [id: string]: {
    cryptoAmount: number;
    dollarAmount: number;
  };
};
type PortfolioData = {
  changePercent: number;
  image: string;
  value: number;
  symbol: string;
  name: string;
};
export const usePortfolio = () => {
  let [user, setUser] = useState<UserPortfolio>({});
  let [portfolio, setResult] = useState<PortfolioData[]>([]);
  let [sum, setSum] = useState<number>(0);
  useEffect(() => {
    axios.get(API_URL + "user?userID=1").then((value) => {
      setUser(value.data.purchasedCrypto);
    });
  }, []);
  useEffect(() => {
    if (Object.keys(user).length > 0) {
      for (let i of Object.keys(user)) {
        axios.get(API_URL + "cryptocurrencies/" + i).then((value) => {
          const changePercent =
            (value.data.currentValue / user[i].dollarAmount - 1) * 100;
          setSum(
            (prev) => prev + user[i].cryptoAmount * value.data.currentValue
          );
          setResult((prev) => [
            ...prev,
            {
              changePercent: changePercent,
              name: value.data.name,
              image: value.data.icon,
              symbol: value.data.symbol,
              value: user[i].cryptoAmount * value.data.currentValue,
            },
          ]);
        });
      }
    }
  }, [user]);
  return { portfolio, sum };
};
