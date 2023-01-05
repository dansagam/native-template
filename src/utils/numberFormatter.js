export const addNairaCurrency = (value) => `₦${value}`;

export const formatThousand = (value, currency = false) => {
  // const result = Platform.OS === 'ios'
  //   ? parseFloat(value).toLocaleString('en')
  const result = parseFloat(value ?? 0)
    .toFixed(currency ? 2 : 0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return currency ? addNairaCurrency(result) : result;
};

export const formatInputToThousand = (value) => {
  const result = formatThousand(value);
  return !result.includes("NaN") ? result : "";
};

export const removeThousandDelimiter = (value) => value.replace(/,/g, "");
