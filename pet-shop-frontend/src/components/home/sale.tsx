import { ProductCard } from '@/components/ui/product-card'
import { SectionTitle } from '@/components/ui/section-title'
import { TProduct } from '@/types/data'
import { useEffect, useState } from 'react'

export const Sale = ({}) => {
  const baseUrl = import.meta.env.VITE_API_URL
  const [products, setProducts] = useState<TProduct[] | null>(null)
  useEffect(() => {
    fetch(`${baseUrl}/products/all`)
      .then((data) => data.json())
      .then((prods) =>
        setProducts(prods.filter((p: TProduct) => p.discont_price !== null))
      )
      .catch((err) => console.error(err))
  }, [])
  return (
    <section className="container mx-auto pt-20">
      <SectionTitle title="Sale" link="products" btnText="All sales" />
      <div className="grid grid-cols-4 gap-8">
        {products?.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  )
}
