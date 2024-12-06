import { useQuery } from '@tanstack/react-query'

import { TProduct } from '@/types/data'

const baseUrl = import.meta.env.VITE_API_URL

const fetchProducts = async (): Promise<TProduct[]> => {
  const response = await fetch(`${baseUrl}/products/all`)
  if (!response.ok) {
    throw new Error('Failed to fetch products')
  }
  return response.json()
}

const fetchProduct = async (id: number): Promise<TProduct> => {
  const response = await fetch(`${baseUrl}/products/${id}`)
  if (!response.ok) {
    throw new Error('Failed to fetch product')
  }
  return response.json()
}

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  })
}

export const useProduct = (id: number) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id),
    enabled: !!id,
  })
}
