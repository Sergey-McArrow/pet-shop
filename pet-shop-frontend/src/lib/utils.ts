import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getDiscountProcent = (price: number, discount: number) =>
  ((100 * (discount - price)) / price).toFixed(0) + '%'
