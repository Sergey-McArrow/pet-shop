type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

export type TCategory = {
  id: number
  title: string
  image: string
  createdAt?: string
  updatedAt?: string
}

export type TProduct = {
  id: number
  title: string
  price: number
  discount_price: number | null
  description: string
  image: string
  createdAt?: string
  updatedAt?: string
  categoryId: number
}
export type TProductWithQuantity = Prettify<TProduct & { quantity: number }>

export type TCategoryResponse = {
  category: TCategory
  data: TProduct[]
}

export type TCategoryIdWithProducts = {
  category: TCategory
  products: TProduct[]
}
