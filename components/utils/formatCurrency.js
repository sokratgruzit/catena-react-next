const unitlist = ['', 'K', 'M', 'B'];
export function formatCurrency(number) {
  let sign = Math.sign(number);
  let unit = 0;

  while (Math.abs(number) > 1000) {
    unit = unit + 1;
    number = Math.floor(Math.abs(number) / 100) / 10;
  }
  return '$' + sign * Math.abs(number) + unitlist[unit];
}
