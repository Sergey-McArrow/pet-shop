import { ProductCard } from '@/components/ui/product-card'
import { SortAndFilter } from '@/components/ui/sortAndFilter'
import { useDebouncedValue } from '@/hooks/useDebouncedValue'
import { useFilteredAndSortedProducts } from '@/hooks/useFilteredAndSortedProducts'
import { TProduct } from '@/types/data'
import { TSorted } from '@/types/sortAndFilter'
import { useState, useEffect } from 'react'

export const Products = ({}) => {
  const baseUrl = import.meta.env.VITE_API_URL
  const [products, setProducts] = useState<TProduct[] | null>(null)

  const [priceFromInput, setPriceFromInput] = useState<number | null>(null)
  const [priceToInput, setPriceToInput] = useState<number | null>(null)

  const [acceptDiscount, setAcceptDiscount] = useState<boolean>(false)
  const [sortOrder, setSortOrder] = useState<TSorted>('default')

  const priceFrom = useDebouncedValue(priceFromInput, 700)
  const priceTo = useDebouncedValue(priceToInput, 700)

  const sortedAndFilteredProducts = useFilteredAndSortedProducts({
    products: products ?? [],
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
    fetch(`${baseUrl}/products/all`)
      .then((data) => data.json())
      .then((prods) => setProducts(prods))
      .catch((err) => console.error(err))
  }, [])
  return (
    <section className="container mx-auto">
      <h2 className="font-bold text-6xl pr-20 pb-10">All products</h2>
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
      <>{JSON.stringify(products, null, 4)}</>
    </section>
  )
}
