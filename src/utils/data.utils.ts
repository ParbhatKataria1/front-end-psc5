import { ProductJust } from "./productUtil";

export function formatCurrency(amount: ProductJust) {
  const intl = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: amount.currencyCode,
  });
  return intl.format(amount.amount);
}
