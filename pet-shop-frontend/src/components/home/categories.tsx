import { CategoriesCard } from '@/components/ui/categories-card'
import { SectionTitle } from '@/components/ui/section-title'
import { TCategory } from '@/types/data'
import { useEffect, useState } from 'react'

export const Categories = ({}) => {
  const baseUrl = import.meta.env.VITE_API_URL
  const [categories, setCategories] = useState<TCategory[] | null>(null)
  useEffect(() => {
    fetch(`${baseUrl}/categories/all`)
      .then((data) => data.json())
      .then((cats) => setCategories(cats.slice(4)))
      .catch((err) => console.error(err))
  }, [])
  return (
    <section className="container mx-auto pt-20">
      <SectionTitle
        title="Categories"
        link="categories"
        btnText="All categories"
      />
      <div className="grid grid-cols-4 gap-8">
        {categories?.map((cat) => <CategoriesCard cat={cat} key={cat.id} />)}
      </div>
    </section>
  )
}
