import { CategoriesCard } from '@/components/ui/categories-card'
import { SectionTitle } from '@/components/ui/section-title'
import { TCategory } from '@/types/data'
import { FC } from 'react'

type TCategoriesProps = {
  categories: TCategory[]
}

export const Categories: FC<TCategoriesProps> = ({ categories }) => {
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
