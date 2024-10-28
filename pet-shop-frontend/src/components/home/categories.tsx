import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { TCategory } from '@/types/data'
import { useEffect, useState } from 'react'

export const Categories = ({}) => {
  const baseUrl = import.meta.env.VITE_API_URL
  const [categories, setCategories] = useState<TCategory[] | null>(null)
  useEffect(() => {
    fetch(`${baseUrl}/categories/all`)
      .then((data) => data.json())
      .then((cats) => setCategories(cats))
      .catch((err) => console.error(err))
  }, [])
  return (
    <section className="container mx-auto pt-20">
      <div className="flex items-center justify-between pb-10">
        <h2 className="font-bold text-6xl pr-8">Categories</h2>
        <hr className="border-gray-300 my-4 w-2/3" />
        <Button variant={'outline'}>All categories</Button>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {categories?.slice(4).map((cat) => (
          <Card key={cat.id}>
            <img src={`${baseUrl}/${cat.image}`} alt={cat.title} />
            <p className="text-center py-4 font-medium text-xl">{cat.title}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
