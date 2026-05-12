export type PillOption = {
  label: string;
  min: number | null;
  max: number | null;
};

export const PRICE_OPTIONS: PillOption[] = [
  { label: 'Any', min: null, max: null },
  { label: '৳20k–30k', min: 20000, max: 30000 },
  { label: '৳30k–50k', min: 30000, max: 50000 },
  { label: '৳50k–1M', min: 50000, max: 100000 },
  { label: '৳1M+', min: 100000, max: null },
];
