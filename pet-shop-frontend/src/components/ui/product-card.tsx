import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useAppDispatch } from '@/hooks/redux'
import { getDiscountProcent } from '@/lib/utils'
import { addProduct } from '@/store/cartSlice'
import { TProduct } from '@/types/data'

type ProductCardProps = {
  product: TProduct
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch()

  return (
    <Card className="relative group">
      {product.discount_price ? (
        <Badge className="p-2 absolute right-2 top-4">
          {getDiscountProcent(product.price, product.discount_price)}
        </Badge>
      ) : null}
      <Link to={`/products/${product.title}`} state={product.id}>
        <img
          className="h-48 sm:h-72 w-full object-contain"
          src={`${import.meta.env.VITE_API_URL}/${product.image}`}
          alt={product.title}
        />
      </Link>
      <div className="px-3 sm:px-8 py-5">
        <h4 className="font-medium line-clamp-1 text-lg sm:text-xl">
          {product.title}
        </h4>
        <p className="py-5">
          {product?.discount_price ? (
            <>
              <span className="font-semibold text-xl md:text-4xl">
                ${product.discount_price}
              </span>
              <span className="font-medium text-lg sm:text-xl text-gray-500 ml-2 sm:ml-4 line-through">
                ${product.price}
              </span>
            </>
          ) : (
            <span className="font-semibold text-xl md:text-4xl">
              ${product.price}
            </span>
          )}
        </p>
      </div>
      <div className="absolute bottom-[40%] px-3 w-full">
        <Button
          onClick={() => dispatch(addProduct(product))}
          className="hidden  group-hover:flex w-full"
        >
          Add to cart
        </Button>
      </div>
    </Card>
  )
}
