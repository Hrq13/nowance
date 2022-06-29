import type { CurrencyInputOptions } from "vue-currency-input";

export const currencyDefaultMask = {
  locale: "en-US",
  currency: "USD",
  currencyDisplay: "symbol",
  valueRange: {
    min: 0,
    max: 100000,
  },
  precision: 2,
  hideCurrencySymbolOnFocus: true,
  hideGroupingSeparatorOnFocus: false,
  hideNegligibleDecimalDigitsOnFocus: false,
  autoDecimalDigits: true,
  autoSign: true,
  useGrouping: true,
  accountingSign: false,
} as CurrencyInputOptions;
