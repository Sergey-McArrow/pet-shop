import { FC } from 'react'

import { CategoriesCard } from '@/components/ui/categories-card'
import { SectionTitle } from '@/components/ui/section-title'
import { TCategory } from '@/types/data'

type TCategoriesProps = {
  categories: TCategory[]
}

export const Categories: FC<TCategoriesProps> = ({ categories }) => {
  return (
    <section className="container mx-auto w-11/12 md:w-full pt-10 sm:pt-20">
      <SectionTitle
        title="Categories"
        link="categories"
        btnText="All categories"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
        {categories?.map((cat) => <CategoriesCard cat={cat} key={cat.id} />)}
      </div>
    </section>
  )
}
