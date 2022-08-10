export const transformCurrency = (x: number | string) => {
  let result = "";
  const stringValue = x.toString();
  const isDecimal = stringValue.indexOf(".");
  let i = stringValue.length - 1;
  let count = 0;
  if (isDecimal > 0) {
    for (i = stringValue.length - 1; i >= isDecimal; i--)
      result = stringValue[i] + result;
  }
  for (; i >= 0; i--) {
    count++;
    result = stringValue[i] + result;
    if (count % 3 == 0 && count != 0 && i != 0) {
      result = "," + result;
    }
  }
  return result;
};
