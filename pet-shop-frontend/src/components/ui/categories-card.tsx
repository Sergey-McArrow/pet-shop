import { Card } from '@/components/ui/card'
import { TCategory } from '@/types/data'
import { FC } from 'react'
import { Link } from 'react-router-dom'

type CategoriesCardProps = {
  cat: TCategory
}

export const CategoriesCard: FC<CategoriesCardProps> = ({ cat }) => {
  const baseUrl = import.meta.env.VITE_API_URL
  return (
    <Link key={cat.id} to={`categories/${cat.id}`}>
      <Card>
        <img src={`${baseUrl}/${cat.image}`} alt={cat.title} />
        <p className="text-center py-4 font-medium text-xl">{cat.title}</p>
      </Card>
    </Link>
  )
}
