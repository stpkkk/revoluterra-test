export function formatToRussianRubles(value: number): string {
  return value.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
  });
}
