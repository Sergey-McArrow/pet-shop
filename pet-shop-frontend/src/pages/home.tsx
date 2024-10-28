import { Categories } from '@/components/home/categories'
import { Hero } from '@/components/home/hero'
import { FC, Suspense } from 'react'

type HomeProps = {}

export const Home: FC<HomeProps> = ({}) => {
  return (
    <>
      <Hero />
      <Suspense fallback={'Loading'}>
        <Categories />
      </Suspense>
    </>
  )
}
