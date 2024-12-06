import { Categories } from '@/components/home/categories'
import { Discount } from '@/components/home/discount'
import { Hero } from '@/components/home/hero'
import { Sale } from '@/components/home/sale'
import { Skeleton } from '@/components/ui/skeleton'
import { useCategories } from '@/hooks/useCategories'
import { useProducts } from '@/hooks/useProducts'

export const Home = () => {
  const { data: categories, isLoading: categoriesLoading } = useCategories()
  const { data: products, isLoading: productsLoading } = useProducts()

  const isLoading = categoriesLoading || productsLoading

  if (isLoading)
    return (
      <div className="flex items-center flex-col space-y-3 w-11/12 mx-auto">
        <Skeleton className="h-[30vh] sm:h-[50vh] w-full rounded-xl" />
        <div className="space-y-2 w-full">
          <Skeleton className="h-4 w-full sm:w-[450px]" />
          <Skeleton className="h-4 w-[80%] sm:w-[400px]" />
        </div>
      </div>
    )

  const homeCategories = categories?.slice(0, 4) || []
  const saleProducts =
    products?.filter((p) => p.discount_price).slice(0, 4) || []

  return (
    <>
      <Hero />
      <Categories categories={homeCategories} />
      <Discount />
      <Sale products={saleProducts} />
    </>
  )
}
