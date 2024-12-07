import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Card } from '@/components/ui/card'
import { TCategory } from '@/types/data'

type CategoriesCardProps = {
  cat: TCategory
}

export const CategoriesCard: FC<CategoriesCardProps> = ({ cat }) => {
  const baseUrl = import.meta.env.VITE_API_URL

  return (
    <Link key={cat.id} to={`/categories/${cat.title}`} state={cat.id}>
      <Card className="min-h-[350px]">
        <img src={`${baseUrl}/public/${cat.image}`} alt={cat.title} />
        <p className="text-center py-4 font-medium text-xl">{cat.title}</p>
      </Card>
    </Link>
  )
}
