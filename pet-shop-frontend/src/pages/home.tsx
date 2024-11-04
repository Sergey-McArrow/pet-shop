import { Categories } from '@/components/home/categories'
import { Discount } from '@/components/home/discount'
import { Hero } from '@/components/home/hero'
import { Sale } from '@/components/home/sale'
import { Skeleton } from '@/components/ui/skeleton'
import { TCategory, TProduct } from '@/types/data'
import { FC, useEffect, useState } from 'react'

type HomeProps = {}

export const Home: FC<HomeProps> = ({}) => {
  const baseUrl = import.meta.env.VITE_API_URL
  const [categories, setCategories] = useState<TCategory[] | null>(null)
  const [products, setProducts] = useState<TProduct[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryResponse = await fetch(`${baseUrl}/categories/all`)
        const categoryData = await categoryResponse.json()
        setCategories(categoryData.slice(0, 4))

        const productResponse = await fetch(`${baseUrl}/products/all`)
        const productData = await productResponse.json()
        setProducts(
          productData
            .filter((p: TProduct) => p.discont_price !== null)
            .slice(0, 4)
        )
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading)
    return (
      <div className="flex items-center flex-col space-y-3">
        <Skeleton className="h-[50vh] w-svw rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[450px]" />
          <Skeleton className="h-4 w-[400px]" />
        </div>
      </div>
    )

  return (
    <>
      <Hero />
      {categories ? <Categories categories={categories} /> : null}
      <Discount />
      {products ? <Sale products={products} /> : null}
    </>
  )
}
