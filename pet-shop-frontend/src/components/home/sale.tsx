import { SectionTitle } from '@/components/ui/section-title'
import { FC } from 'react'

type SaleProps = {}

export const Sale: FC<SaleProps> = ({}) => {
  return (
    <section className="container mx-auto">
      <SectionTitle title="Sale" link="products" btnText="All sales" />
    </section>
  )
}
