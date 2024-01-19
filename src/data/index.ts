export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
};

export type Currency = 'USD' | 'EUR' | 'UAH' | 'PLN';

export const exchangeValue: Record<Currency, number> = {
  USD: 1,
  EUR: 0.9,
  UAH: 39.5,
  PLN: 3.96,
};

export const CURRENCIES: Currency[] = ['EUR', 'USD', 'UAH', 'PLN'];

export const productsArray: Product[] = [
  {
    id: 1,
    title: 'iPhone 13 Pro',
    description: 'This is iPhone 13 Pro...',
    price: 800,
  },
  {
    id: 2,
    title: 'iPhone 14 Pro',
    description: 'This is iPhone 14Pro...',
    price: 900,
  },
  {
    id: 3,
    title: 'iPhone 15 Pro',
    description: 'This is iPhone 15 Pro...',
    price: 1000,
  },
];
