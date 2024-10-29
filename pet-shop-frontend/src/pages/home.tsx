import { Categories } from '@/components/home/categories'
import { Discount } from '@/components/home/discount'
import { Hero } from '@/components/home/hero'
import { FC } from 'react'

type HomeProps = {}

export const Home: FC<HomeProps> = ({}) => {
  return (
    <>
      <Hero />
      <Categories />
      <Discount />
    </>
  )
}
