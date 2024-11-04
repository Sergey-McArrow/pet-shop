import { Button } from '@/components/ui/button'
import { QuantitySwitch } from '@/components/ui/quantitySwitch'
import { updateQuantity } from '@/store/cartSlice'
import { TProduct } from '@/types/data'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

export const Product = () => {
  const baseUrl = import.meta.env.VITE_API_URL
  const { state } = useLocation()
  const [product, setProduct] = useState<TProduct | null>(null)
  const [isColapsed, setIsColapsed] = useState(true)
  const [quantity, setQuantity] = useState(1)

  const dispatch = useDispatch()

  useEffect(() => {
    fetch(`${baseUrl}/products/${state}`)
      .then((data) => data.json())
      .then((prod) => setProduct(prod[0]))
      .catch((err) => console.error(err))
  }, [])
  if (!product) return null
  return (
    <>
      <section
        className={`${isColapsed ? 'max-h-[460px] overflow-hidden' : 'max-h-[1000px]'} 
        container mx-auto grid grid-cols-2 transition-all duration-700 ease-in-out`}
      >
        <img
          src={`${import.meta.env.VITE_API_URL}/${product.image}`}
          alt={product.title}
        />
        <div>
          <h2 className="font-bold text-4xl">{product.title}</h2>
          <p className="py-8">
            {product?.discont_price ? (
              <>
                <span className="font-semibold text-6xl">
                  ${product.discont_price}
                </span>
                <span className="font-medium text-4xl text-gray-500 ml-4 line-through">
                  ${product.price}
                </span>
              </>
            ) : (
              <span className="font-semibold text-6xl">${product.price}</span>
            )}
          </p>
          <div className="flex gap-8">
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
