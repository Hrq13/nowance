export default function (mil: number, options = { locale: "en-us" }): string {
  return new Date(mil).toLocaleDateString(options.locale, {
    year: "2-digit",
    day: "2-digit",
    month: "2-digit",
  });
}
