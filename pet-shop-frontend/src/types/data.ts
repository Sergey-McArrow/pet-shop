export type TCategory = {
  id: number
  title: string
  image: string
  createdAt: string
  updatedAt: string
}

export type TProduct = {
  id: number
  title: string
  price: number
  discont_price: number | null
  description: string
  image: string
  createdAt: string
  updatedAt: string
  categoryId: number
}
