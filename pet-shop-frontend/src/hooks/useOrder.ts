import { useMutation } from '@tanstack/react-query'

interface OrderData {
  name: string
  email: string
  phone: string
  total: number
  products: {
    id: number
    quantity: number
  }[]
}

export const useOrder = () => {
  const baseUrl = import.meta.env.VITE_API_URL

  return useMutation({
    mutationFn: async (order: OrderData) => {
      const response = await fetch(`${baseUrl}/orders/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ order }),
      })

      if (!response.ok) {
        throw new Error('Failed to create order')
      }

      return response.json()
    },
  })
}
