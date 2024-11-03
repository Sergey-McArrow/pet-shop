import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { TProduct } from '@/types/data'
import { FC, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

type ProductProps = {}

export const Product: FC<ProductProps> = ({}) => {
  const baseUrl = import.meta.env.VITE_API_URL
  const { state } = useLocation()
  const [product, setProduct] = useState<TProduct | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [isColapsed, setIsColapsed] = useState(true)
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
            <div className="flex gap-2">
              <Button
                variant={'outline'}
                disabled={quantity === 1}
                onClick={() => setQuantity((prev) => prev - 1)}
              >
                -
              </Button>
              <Input
                className="w-24 text-center"
                type="text"
                value={quantity}
              />
              <Button
                variant={'outline'}
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </Button>
            </div>
            <Button>Add to cart</Button>
          </div>
          <div className="pt-8">
            <h4 className="font-medium text-xl pb-4">Description</h4>
            <p className={isColapsed ? 'line-clamp-6' : ''}>
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
