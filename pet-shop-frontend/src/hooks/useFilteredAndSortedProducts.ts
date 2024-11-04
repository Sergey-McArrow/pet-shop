import { TProduct } from '@/types/data'
import { useMemo } from 'react'

type TSorted = 'default' | 'asc' | 'desc'

interface UseFilteredAndSortedProductsProps {
  products: TProduct[] | []
  priceFrom: number | null
  priceTo: number | null
  acceptDiscount: boolean
  sortOrder: TSorted
}

export const useFilteredAndSortedProducts = ({
  products,
  priceFrom,
  priceTo,
  acceptDiscount,
  sortOrder,
}: UseFilteredAndSortedProductsProps): TProduct[] => {
  return useMemo(() => {
    if (!products) return []

    let filteredProducts = [...products]

    if (priceFrom !== null) {
      filteredProducts = filteredProducts.filter((product) => {
        const price = product.discont_price ?? product.price
        return price >= priceFrom
      })
    }

    if (priceTo !== null) {
      filteredProducts = filteredProducts.filter((product) => {
        const price = product.discont_price ?? product.price
        return price <= priceTo
      })
    }

    if (acceptDiscount) {
      filteredProducts = filteredProducts.filter(
        (product) => product.discont_price !== null
      )
    }

    switch (sortOrder) {
      case 'asc':
        return filteredProducts.sort(
          (a, b) => (a.discont_price ?? a.price) - (b.discont_price ?? b.price)
        )
      case 'desc':
        return filteredProducts.sort(
          (a, b) => (b.discont_price ?? b.price) - (a.discont_price ?? a.price)
        )
      case 'default':
      default:
        return filteredProducts
    }
  }, [products, priceFrom, priceTo, acceptDiscount, sortOrder])
}
