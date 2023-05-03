export function formatNumber(number) {
  const n = number.toString().split('.');
  return (
    n[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
    (n.length > 1 ? '.' + n[1] : '')
  );
}
