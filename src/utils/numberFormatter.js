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

export const onNumberValidator = (values, onChange, formatted = false, currency = false) => {
  const re = /^[0-9\b]+$/;
  if (typeof values === "string") {
    if (values === "" || re.test(values)) {
      if (onChange) {
        if (formatted) {
          return onChange(formatThousand(values, currency));
        }
        return onChange(values);
      }
    }
  }
};

export const removeThousandDelimiter = (value) => value.replace(/,/g, "");
