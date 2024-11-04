import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useAppDispatch } from '@/hooks/redux'
import { getDiscountProcent } from '@/lib/utils'
import { addProduct } from '@/store/cartSlice'
import { TProduct } from '@/types/data'
import { FC } from 'react'
import { Link } from 'react-router-dom'

type ProductCardProps = {
  product: TProduct
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch()

  return (
    <Card className="relative group">
      {product.discont_price ? (
        <Badge className="p-2 absolute right-2 top-4">
          {getDiscountProcent(product.price, product.discont_price)}
        </Badge>
      ) : null}
      <Link to={`/products/${product.title}`} state={product.id}>
        <img
          className="h-72 object-contain"
          src={`${import.meta.env.VITE_API_URL}/${product.image}`}
          alt={product.title}
        />
      </Link>
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
