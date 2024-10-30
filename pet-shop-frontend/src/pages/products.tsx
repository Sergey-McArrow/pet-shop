import { TProduct } from '@/types/data'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const Products = ({}) => {
  const baseUrl = import.meta.env.VITE_API_URL
  const params = useParams()
  const [products, setProducts] = useState<TProduct[] | null>(null)
  useEffect(() => {
    fetch(`${baseUrl}/categories/${params}`)
      .then((data) => data.json())
      .then((prods) => setProducts(prods))
      .catch((err) => console.error(err))
  }, [])
  return <>{JSON.stringify(products)}</>
}
