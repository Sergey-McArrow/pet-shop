import { Button } from '@/components/ui/button'
import { FC } from 'react'

type HeroProps = {}

export const Hero: FC<HeroProps> = ({}) => {
  return (
    <section className="min-h-[600px] bg-[#00000066]">
      <img
        src="/src/assets/hero.png"
        alt="Hero image"
        className="absolute -z-10 min-h-[600px]"
      />
      <div className="px-10 pt-20">
        <h1 className="text-white font-bold text-8xl leading-[106px] pb-10">
          Amazing Discounts
          <br />
          on Pets Products!
        </h1>
        <Button className="bg-blue-700 px-14 py-6 text-xl hover:bg-blue-900">
          Check out
        </Button>
      </div>
    </section>
  )
}
