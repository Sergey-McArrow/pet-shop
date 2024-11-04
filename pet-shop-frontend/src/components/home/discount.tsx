import discountImg from '@/assets/discount.png'
import { Form } from '@/components/ui/form'

export const Discount = () => {
  return (
    <section className="container mx-auto bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-800 dark:to-slate-600 px-8 mt-24 rounded-lg">
      <h2 className="font-bold text-6xl text-center py-8 text-white">
        5% off on the first order
      </h2>
      <div className="grid grid-cols-2">
        <img src={discountImg} alt="Pets" className="mt-1" />
        <Form />
      </div>
    </section>
  )
}
