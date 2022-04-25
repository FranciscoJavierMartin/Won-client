export default function formatPrice(price: number | bigint): string {
  return new Intl.NumberFormat('es', {
    style: 'currency',
    currency: 'EUR',
  }).format(price);
}
