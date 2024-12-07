import { useLocation } from 'react-router-dom'

import { ProductCard } from '@/components/ui/product-card'
import { Skeleton } from '@/components/ui/skeleton'
import { SortAndFilter } from '@/components/ui/sortAndFilter'
import { useCategory } from '@/hooks/useCategory'
import { useFilteredAndSortedProducts } from '@/hooks/useFilteredAndSortedProducts'

export const Category = () => {
  const { state: categoryId } = useLocation()
  const { data, isLoading, error } = useCategory(categoryId)

  const {
    filteredProducts,
    acceptDiscount,
    sortOrder,
    handlePriceFromChange,
    handlePriceToChange,
    handleSortOrderChange,
    setAcceptDiscount,
  } = useFilteredAndSortedProducts({
    products: data?.products ?? [],
  })

  if (isLoading) {
    return (
      <section className="container mx-auto w-11/12 md:w-full">
        <Skeleton className="h-12 w-48 mb-10" />
        <div className="flex flex-col md:flex-row gap-10 md:items-center py-10">
          <div className="flex gap-4 items-center">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-10 w-24" />
            <Skeleton className="h-10 w-24" />
          </div>
          <div className="flex gap-4 items-center">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="space-y-4">
              <Skeleton className="h-72 w-full" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-8 w-1/2" />
            </div>
          ))}
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto w-11/12 md:w-full text-center py-10">
        <h2 className="text-2xl font-bold text-red-500">
          Error loading category
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Please try again later
        </p>
      </div>
    )
  }

  return (
    <section className="container mx-auto w-11/12 md:w-full">
      <h2 className="font-bold text-3xl sm:text-4xl md:text-6xl pb-6 sm:pb-10">
        {data?.category.title}
      </h2>
      <SortAndFilter
        acceptDiscount={acceptDiscount}
        handlePriceFromChange={handlePriceFromChange}
        handlePriceToChange={handlePriceToChange}
        handleSortOrderChange={handleSortOrderChange}
        setAcceptDiscount={setAcceptDiscount}
        sortOrder={sortOrder}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
        {filteredProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  )
}
