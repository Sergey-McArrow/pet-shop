import { CategoriesCard } from '@/components/ui/categories-card'
import { TCategory } from '@/types/data'
import { useEffect, useState } from 'react'

export const CategoriesPage = () => {
  const baseUrl = import.meta.env.VITE_API_URL
  const [categories, setCategories] = useState<TCategory[] | null>(null)
  useEffect(() => {
    fetch(`${baseUrl}/categories/all`)
      .then((data) => data.json())
      .then((cats) => setCategories(cats))
      .catch((err) => console.error(err))
  }, [])
  return (
    <section className="container mx-auto pb-24">
      <h2 className="font-bold text-6xl pr-20 pb-10">Categories</h2>
      <div className="grid grid-cols-4 gap-8">
        {categories?.map((cat) => <CategoriesCard cat={cat} key={cat.id} />)}
      </div>
    </section>
  )
}
