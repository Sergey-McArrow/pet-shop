import { ProductCard } from '@/components/ui/product-card'
import { SectionTitle } from '@/components/ui/section-title'
import { TProduct } from '@/types/data'
import { FC } from 'react'

type TSaleProps = {
  products: TProduct[]
}

export const Sale: FC<TSaleProps> = ({ products }) => {
  return (
    <section className="container mx-auto pt-20">
      <SectionTitle title="Sale" link="products" btnText="All sales" />
      <div className="grid grid-cols-4 gap-8">
        {products?.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  )
}
