import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/const";
import { transformCurrency } from "../../utils/function";

interface CurrencyProps {
  image: string;
  crypto: string;
  cost: string;
}

interface CurrencyIdProps {
  id: number;
  icon: string;
  name: string;
  currentValue: string;
}

export const useCurrency = () => {
  let [currency, setCurrency] = useState<CurrencyIdProps[]>([]);
  let [result, setResult] = useState<CurrencyProps[]>([]);
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
  useEffect(() => {
    for (let i = 0; i < currency.length; i++) {
      setResult((prev) => [
        ...prev,
        {
          image: currency[i].icon,
          crypto: currency[i].name,
          cost: `$ ${transformCurrency(currency[i].currentValue)}`,
        },
      ]);
    }
  }, [currency]);
  return result;
};
