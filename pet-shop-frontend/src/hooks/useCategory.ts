import { useQuery } from '@tanstack/react-query'

import { TCategory, TProduct } from '@/types/data'

const baseUrl = import.meta.env.VITE_API_URL

type CategoryResponse = {
  category: TCategory
  products: TProduct[]
}

const fetchCategory = async (id: number): Promise<CategoryResponse> => {
  const response = await fetch(`${baseUrl}/categories/${id}`)
  if (!response.ok) {
    throw new Error('Failed to fetch category')
  }
  return response.json()
}

export const useCategory = (id: number) => {
  return useQuery({
    queryKey: ['category', id],
    queryFn: () => fetchCategory(id),
    enabled: !!id,
  })
}
