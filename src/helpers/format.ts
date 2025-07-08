function formatNumber(number: number, maximumFractionDigits = 2) {
  if (!number) return '0';

  if (
    typeof maximumFractionDigits !== 'number' ||
    isNaN(maximumFractionDigits)
  ) {
    maximumFractionDigits = 2;
  }
  const safeDigits = Math.max(0, Math.min(20, maximumFractionDigits));

  return new Intl.NumberFormat('en', {
    maximumFractionDigits: safeDigits,
  }).format(number);
}

export { formatNumber };
