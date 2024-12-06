import { useQuery } from '@tanstack/react-query'

import { TCategory } from '@/types/data'

const baseUrl = import.meta.env.VITE_API_URL

const fetchCategories = async (): Promise<TCategory[]> => {
  const response = await fetch(`${baseUrl}/categories/all`)
  if (!response.ok) {
    throw new Error('Failed to fetch categories')
  }
  return response.json()
}

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  })
}
