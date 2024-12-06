import { CategoriesCard } from '@/components/ui/categories-card'
import { Skeleton } from '@/components/ui/skeleton'
import { useCategories } from '@/hooks/useCategories'

export const CategoriesPage = () => {
  const { data: categories, isLoading, error } = useCategories()

  if (isLoading) {
    return (
      <section className="container mx-auto w-11/12 md:w-full pb-24">
        <Skeleton className="h-12 w-48 mb-10" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="space-y-4">
              <Skeleton className="h-72 w-full rounded-lg" />
              <Skeleton className="h-6 w-3/4" />
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
          Error loading categories
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Please try again later
        </p>
      </div>
    )
  }

  return (
    <section className="container mx-auto w-11/12 md:w-full pb-24">
      <h2 className="font-bold text-3xl sm:text-4xl md:text-6xl pb-6 sm:pb-10">
        Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
        {categories?.map((cat) => <CategoriesCard cat={cat} key={cat.id} />)}
      </div>
    </section>
  )
}
