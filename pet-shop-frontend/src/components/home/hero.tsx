import { Link } from 'react-router-dom'

import heroImg from '@/assets/hero.png'
import { Button } from '@/components/ui/button'

export const Hero = () => {
  return (
    <section className="min-h-[600px] bg-[#00000066]">
      <img
        src={heroImg}
        alt="Hero image"
        className="absolute -z-10 min-h-[600px] object-cover"
      />
      <div className="px-10 pt-20 pb-10 md:pb-10">
        <h1 className="text-white font-bold text-6xl lg:text-7xl leading-snug pb-10">
          Amazing Discounts
          <br />
          on Pets Products!
        </h1>
        <Link to={'/products'}>
          <Button className="bg-slate-700 px-14 py-6 text-lg md:text-xl hover:bg-slate-900">
            Check out
          </Button>
        </Link>
      </div>
    </section>
  )
}
