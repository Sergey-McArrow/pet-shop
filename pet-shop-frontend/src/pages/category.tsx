import { ProductCard } from '@/components/ui/product-card'
import { SortAndFilter } from '@/components/ui/sortAndFilter'
import { useDebouncedValue } from '@/hooks/useDebouncedValue'
import { useFilteredAndSortedProducts } from '@/hooks/useFilteredAndSortedProducts'
import { TCategoryResponse } from '@/types/data'
import { TSorted } from '@/types/sortAndFilter'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const Category = ({}) => {
  const { pathname, state } = useLocation()
  const baseUrl = import.meta.env.VITE_API_URL
  const [products, setProducts] = useState<TCategoryResponse | null>(null)

  const [priceFromInput, setPriceFromInput] = useState<number | null>(null)
  const [priceToInput, setPriceToInput] = useState<number | null>(null)

  const [acceptDiscount, setAcceptDiscount] = useState<boolean>(false)
  const [sortOrder, setSortOrder] = useState<TSorted>('default')

  const priceFrom = useDebouncedValue(priceFromInput, 700)
  const priceTo = useDebouncedValue(priceToInput, 700)

  const sortedAndFilteredProducts = useFilteredAndSortedProducts({
    products: products?.data ?? [],
    priceFrom,
    priceTo,
    acceptDiscount,
    sortOrder,
  })

  const handlePriceFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const parsedValue = value ? parseFloat(value) : null
    setPriceFromInput(parsedValue)
  }

  const handlePriceToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const parsedValue = value ? parseFloat(value) : null
    setPriceToInput(parsedValue)
  }

  const handleSortOrderChange = (value: string) => {
    setSortOrder(value as TSorted)
  }

  useEffect(() => {
    fetch(`${baseUrl}/categories/${state}`)
      .then((data) => data.json())
      .then((prods) => setProducts(prods))
      .catch((err) => console.error(err))
  }, [])

  return (
    <section className="container mx-auto">
      <h2 className="font-bold text-6xl pr-20 pb-10">
        {pathname.split('/')[2].replaceAll('%20', ' ')}
      </h2>
      <SortAndFilter
        acceptDiscount={acceptDiscount}
        handlePriceFromChange={handlePriceFromChange}
        handlePriceToChange={handlePriceToChange}
        handleSortOrderChange={handleSortOrderChange}
        setAcceptDiscount={setAcceptDiscount}
        sortOrder={sortOrder}
      />
      <div className="grid grid-cols-4 gap-8">
        {sortedAndFilteredProducts.map((p) => (
          <ProductCard product={p} key={p.id} />
        ))}
      </div>
    </section>
  )
}
