export function wholeNumber(number: number | string): string {
  return new Intl.NumberFormat("th-TH", { maximumFractionDigits: 0 }).format(
    Number(number)
  );
}

export function accountant(number: number | string): string {
  return new Intl.NumberFormat("th-TH", { maximumFractionDigits: 2 }).format(
    Number(number)
  );
}
