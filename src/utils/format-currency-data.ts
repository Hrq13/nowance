const defaultOptions = {
  locale: "en-US",
  currency: "USD",
};

export default function (
  value: string | number,
  options: typeof defaultOptions = defaultOptions
): string {
  if (typeof value === "string") value = Number(value);

  if (typeof value !== "number")
    throw new Error(`Could not parse value ${value} into a number.`);

  value = new Intl.NumberFormat(options.locale, {
    style: "currency",
    currency: options.currency,
  }).format(value);
  return value;
}
