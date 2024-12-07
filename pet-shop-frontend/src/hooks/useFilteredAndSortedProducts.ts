import { ChangeEvent, useMemo, useState } from 'react'

import { useDebouncedValue } from '@/hooks/useDebouncedValue'
import {
  TSorted,
  UseFilteredAndSortedProductsProps,
  UseFilteredAndSortedProductsReturn,
} from '@/types/sortAndFilter'

export const useFilteredAndSortedProducts = ({
  products,
}: UseFilteredAndSortedProductsProps): UseFilteredAndSortedProductsReturn => {
  const [priceFromInput, setPriceFromInput] = useState<number | null>(null)
  const [priceToInput, setPriceToInput] = useState<number | null>(null)
  const [acceptDiscount, setAcceptDiscount] = useState<boolean>(false)
  const [sortOrder, setSortOrder] = useState<TSorted>('default')

  const priceFrom = useDebouncedValue(priceFromInput, 700)
  const priceTo = useDebouncedValue(priceToInput, 700)

  const handlePriceFromChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const parsedValue = value ? parseFloat(value) : null
    setPriceFromInput(parsedValue)
  }

  const handlePriceToChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const parsedValue = value ? parseFloat(value) : null
    setPriceToInput(parsedValue)
  }

  const handleSortOrderChange = (value: string) => {
    setSortOrder(value as TSorted)
  }

  const filteredProducts = useMemo(() => {
    if (!products) return []

    let filtered = [...products]

    if (priceFrom !== null) {
      filtered = filtered.filter((product) => {
        const price = product.discount_price ?? product.price
        return price >= priceFrom
      })
    }

    if (priceTo !== null) {
      filtered = filtered.filter((product) => {
        const price = product.discount_price ?? product.price
        return price <= priceTo
      })
    }

    if (acceptDiscount) {
      filtered = filtered.filter((product) => product.discount_price !== null)
    }

    switch (sortOrder) {
      case 'asc':
        return filtered.sort(
          (a, b) =>
            (a.discount_price ?? a.price) - (b.discount_price ?? b.price)
        )
      case 'desc':
        return filtered.sort(
          (a, b) =>
            (b.discount_price ?? b.price) - (a.discount_price ?? a.price)
        )
      default:
        return filtered
    }
  }, [products, priceFrom, priceTo, acceptDiscount, sortOrder])

  return {
    filteredProducts,
    acceptDiscount,
    sortOrder,
    handlePriceFromChange,
    handlePriceToChange,
    handleSortOrderChange,
    setAcceptDiscount,
  }
}
