import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { QuantitySwitch } from '@/components/ui/quantitySwitch'
import { Skeleton } from '@/components/ui/skeleton'
import { useProduct } from '@/hooks/useProducts'
import { updateQuantity } from '@/store/cartSlice'

export const Product = () => {
  const { state: productId } = useLocation()
  const { data: product, isLoading } = useProduct(productId)
  const [isColapsed, setIsColapsed] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()

  if (isLoading) {
    return (
      <div className="container mx-auto w-11/12 md:w-full grid md:grid-cols-2 gap-8">
        <Skeleton className="h-[460px] w-full" />
        <div className="space-y-4">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-16 w-1/2" />
          <Skeleton className="h-32 w-full" />
        </div>
      </div>
    )
  }

  if (!product) return null

  return (
    <>
      <section
        className={`${isColapsed ? 'md:max-h-[460px] overflow-hidden' : 'max-h-[1000px]'} 
         container mx-auto w-11/12 md:w-full grid md:grid-cols-2 gap-8 transition-all duration-700 ease-in-out`}
      >
        <img
          src={`${import.meta.env.VITE_API_URL}/public/${product.image}`}
          alt={product.title}
        />
        <div>
          <h2 className="font-bold text-4xl">{product.title}</h2>
          <p className="py-8">
            {product?.discount_price ? (
              <>
                <span className="font-semibold text-4xl md:text-6xl">
                  ${product.discount_price}
                </span>
                <span className="font-medium text-2xl md:text-4xl text-gray-500 ml-4 line-through">
                  ${product.price}
                </span>
              </>
            ) : (
              <span className="font-semibold text-4xl md:text-6xl">
                ${product.price}
              </span>
            )}
          </p>
          <div className="flex flex-col md:flex-row gap-8">
            <QuantitySwitch quantity={quantity} setQuantity={setQuantity} />
            <Button
              onClick={() => dispatch(updateQuantity({ product, quantity }))}
            >
              Add to cart
            </Button>
          </div>
          <div className="pt-8">
            <h4 className="font-medium text-xl pb-4">Description</h4>
            <p className={isColapsed ? 'line-clamp-5' : ''}>
              {product.description}
            </p>
            <Button
              className=" bg-transparent px-0 underline font-medium hover:border-transparent"
              variant={'link'}
              onClick={() => setIsColapsed((prev) => !prev)}
            >
              Read {isColapsed ? 'more' : 'less'}
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
