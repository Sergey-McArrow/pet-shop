import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FC } from 'react'

type DiscountProps = {}

export const Discount: FC<DiscountProps> = ({}) => {
  return (
    <section className="container mx-auto bg-gradient-to-r from-blue-800 to-blue-600 dark:from-slate-800 dark:to-slate-600 px-8 mt-24 rounded-lg">
      <h2 className="font-bold text-6xl text-center py-8 text-white">
        5% off on the first order
      </h2>
      <div className="grid grid-cols-2">
        <img src="/src/assets/discount.png" alt="Pets" />
        <div>
          <form action="" className="grid gap-4 py-8">
            <Input
              type="text"
              placeholder="Name"
              className="placeholder:text-white"
            />
            <Input
              className="placeholder:text-white"
              type="text"
              placeholder="Phone number"
            />
            <Input
              className="placeholder:text-white"
              type="email"
              placeholder="Email"
            />
            <Button
              variant={'secondary'}
              className="w-full dark:bg-neutral-50 dark:text-black"
            >
              {' '}
              Get a discount
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
