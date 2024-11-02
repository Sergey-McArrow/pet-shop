import { Input } from '@/components/ui/input'
import { ProductCard } from '@/components/ui/product-card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useDebouncedValue } from '@/hooks/useDebouncedValue'
import { useFilteredAndSortedProducts } from '@/hooks/useFilteredAndSortedProducts'
import { TCategoryResponse } from '@/types/data'
import { FC, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

type CategoryProps = {}
type TSorted = 'default' | 'asc' | 'desc'

export const Category: FC<CategoryProps> = ({}) => {
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
    products,
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
      <h2>{pathname.split('/')[2].replaceAll('%20', ' ')}</h2>
      <div className="flex gap-10 items-center py-10">
        <div className="flex gap-4 items-center">
          <p>Price</p>
          <Input
            type="text"
            placeholder="from"
            className="w-24"
            onChange={handlePriceFromChange}
          />
          <Input
            type="text"
            placeholder="to"
            className="w-24"
            onChange={handlePriceToChange}
          />
        </div>
        <div className="flex gap-4 items-center">
          <label
            htmlFor="discount"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Discounted items
          </label>
          <input
            type="checkbox"
            className="bg-inherit"
            id="discount"
            checked={acceptDiscount}
            onChange={(e) => setAcceptDiscount(e.target.checked)}
          />
        </div>
        <div className="flex gap-4 items-center">
          <p>Sorted</p>
          <Select value={sortOrder} onValueChange={handleSortOrderChange}>
            <SelectTrigger className="min-w-24 bg-inherit border border-gray-800">
              <SelectValue placeholder="by default" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">by default</SelectItem>
              <SelectItem value="asc">ascending</SelectItem>
              <SelectItem value="desc">descending</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {sortedAndFilteredProducts.map((p) => (
          <ProductCard product={p} key={p.id} />
        ))}
      </div>
    </section>
  )
}
