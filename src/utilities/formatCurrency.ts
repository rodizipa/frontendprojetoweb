const FORMATTER = new Intl.NumberFormat(undefined, {currency: "BRL", style: "currency"});

export function formatCurrency(number: number) {
  return FORMATTER.format(number);
}