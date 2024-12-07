import { ChangeEvent, Dispatch, SetStateAction } from 'react'

import { TProduct } from './data'

export type TSorted = 'default' | 'asc' | 'desc'

export interface UseFilteredAndSortedProductsProps {
  products: TProduct[]
}

export interface UseFilteredAndSortedProductsReturn {
  filteredProducts: TProduct[]
  acceptDiscount: boolean
  sortOrder: TSorted
  handlePriceFromChange: (e: ChangeEvent<HTMLInputElement>) => void
  handlePriceToChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleSortOrderChange: (value: string) => void
  setAcceptDiscount: Dispatch<SetStateAction<boolean>>
}
