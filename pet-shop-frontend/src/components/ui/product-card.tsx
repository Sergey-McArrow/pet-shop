import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { getDiscountProcent } from '@/lib/utils'
import { TProduct } from '@/types/data'
import { FC } from 'react'
import { Link } from 'react-router-dom'

type ProductCardProps = {
  product: TProduct
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`products/${product.id}`}>
      <Card className="relative">
        {product.discont_price ? (
          <Badge className="p-2 absolute right-2 top-4">
            {getDiscountProcent(product.price, product.discont_price)}
          </Badge>
        ) : null}
        <img
          src={`${import.meta.env.VITE_API_URL}/${product.image}`}
          alt={product.title}
        />
        <div className="px-8 py-5">
          <h4 className="font-medium line-clamp-1 text-xl">{product.title}</h4>
          <p className="py-5">
            {product?.discont_price ? (
              <>
                <span className="font-semibold text-4xl">
                  ${product.discont_price}
                </span>
                <span className="font-medium text-xl text-gray-500 ml-4 line-through">
                  ${product.price}
                </span>
              </>
            ) : (
              <span className="font-semibold text-4xl">${product.price}</span>
            )}
          </p>
        </div>
      </Card>
    </Link>
  )
}
