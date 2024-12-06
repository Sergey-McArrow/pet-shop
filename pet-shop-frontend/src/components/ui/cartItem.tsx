import { SetStateAction } from 'react'

import { useAppDispatch } from '@/hooks/redux'
import { removeProduct } from '@/store/cartSlice'
import { TProduct } from '@/types/data'

import { Button } from './button'
import { QuantitySwitch } from './quantitySwitch'

interface CartItemProps {
  product: TProduct & { quantity: number }
  quantity: number
  setQuantity: (value: SetStateAction<number>) => void
}

export const CartItem = ({ product, quantity, setQuantity }: CartItemProps) => {
  const dispatch = useAppDispatch()
  const baseUrl = import.meta.env.VITE_API_URL

  return (
    <div className="rounded-lg flex flex-col lg:flex-row shadow-lg dark:shadow-slate-900">
      <img
        src={`${baseUrl}/${product.image}`}
        alt={product.title}
        className="min-w-[200px] h-[180px] object-contain"
      />
      <div className="p-6 grow">
        <div className="flex justify-between items-center gap-2">
          <p>{product.title}</p>
          <Button
            onClick={() => dispatch(removeProduct(product.id))}
            variant={'outline'}
          >
            X
          </Button>
        </div>
        <div className="flex flex-col md:flex-row items-center space-x-6 space-y-2 pt-6">
          <QuantitySwitch quantity={quantity} setQuantity={setQuantity} />
          {product?.discount_price ? (
            <div>
              <span className="font-semibold text-xl md:text-4xl">
                ${product.discount_price}
              </span>
              <span className="font-medium text-xl md:text-4xl text-slate-500 ml-4 line-through">
                ${product.price}
              </span>
            </div>
          ) : (
            <span className="font-semibold text-xl md:text-4xl">
              ${product.price}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
