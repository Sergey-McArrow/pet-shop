import heroImg from '@/assets/hero.png'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export const Hero = () => {
  return (
    <section className="min-h-[600px] bg-[#00000066]">
      <img
        src={heroImg}
        alt="Hero image"
        className="absolute -z-10 min-h-[600px]"
      />
      <div className="px-10 pt-20">
        <h1 className="text-white font-bold text-8xl leading-[106px] pb-10">
          Amazing Discounts
          <br />
          on Pets Products!
        </h1>
        <Link to={'/products'}>
          <Button className="bg-slate-700 px-14 py-6 text-xl hover:bg-slate-900">
            Check out
          </Button>
        </Link>
      </div>
    </section>
  )
}
