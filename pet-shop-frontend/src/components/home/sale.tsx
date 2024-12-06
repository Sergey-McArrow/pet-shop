import { FC } from 'react'

import { ProductCard } from '@/components/ui/product-card'
import { SectionTitle } from '@/components/ui/section-title'
import { TProduct } from '@/types/data'

type TSaleProps = {
  products: TProduct[]
}

export const Sale: FC<TSaleProps> = ({ products }) => {
  return (
    <section className="container mx-auto w-11/12 md:w-full pt-10 sm:pt-20">
      <SectionTitle title="Sale" link="sales" btnText="All sales" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
        {products?.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  )
}
